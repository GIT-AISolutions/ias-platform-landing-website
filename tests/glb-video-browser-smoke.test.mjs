import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';

const require = createRequire(import.meta.url);
const PORT = Number(process.env.SMOKE_PORT || 4173);
const BASE_URL = `http://127.0.0.1:${PORT}`;
const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 860 },
  { name: 'phone-360', width: 360, height: 740 },
  { name: 'phone-390', width: 390, height: 844 },
  { name: 'phone-430', width: 430, height: 932 },
];
const PAGES = [
  { name: 'home', path: '/' },
  { name: 'docs', path: '/docs.html' },
  { name: 'legal', path: '/legal.html' },
];

function loadPlaywright() {
  try {
    return require('playwright');
  } catch {
    const fallbackPath = process.env.PLAYWRIGHT_MODULE_PATH
      || '/Users/ginosponton/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.js';
    return require(fallbackPath);
  }
}

async function waitForServer(url, getStderr, timeoutMs = 15000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
  }
  const stderr = getStderr();
  throw new Error(`Timed out waiting for ${url}${stderr ? `\nServer stderr:\n${stderr}` : ''}`);
}

async function launchBrowser(chromium) {
  try {
    return await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' });
  } catch {
    return chromium.launch({ headless: true });
  }
}

fs.mkdirSync('output/playwright', { recursive: true });

const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], {
  stdio: ['ignore', 'ignore', 'pipe'],
});
let serverStderr = '';
server.stderr.on('data', (chunk) => {
  serverStderr += chunk.toString();
});

try {
  await waitForServer(BASE_URL, () => serverStderr);

  const { chromium } = loadPlaywright();
  const browser = await launchBrowser(chromium);

  for (const viewport of VIEWPORTS) {
    for (const pageInfo of PAGES) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
      const errors = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      page.on('pageerror', (error) => errors.push(error.message));

      await page.goto(`${BASE_URL}${pageInfo.path}?browser-smoke=${viewport.name}`, { waitUntil: 'domcontentloaded' });
      await page.evaluate(() => localStorage.setItem('cookie-consent', 'accepted'));
      await page.reload({ waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(pageInfo.name === 'home' ? 1200 : 350);

      const layout = await page.evaluate(() => {
        const nav = document.querySelector('nav');
        const doc = document.documentElement;
        const buttons = Array.from(document.querySelectorAll('.btn, button'));
        const overflowingButtons = buttons
          .map((button) => {
            const rect = button.getBoundingClientRect();
            return { text: button.textContent.trim(), left: rect.left, right: rect.right };
          })
          .filter((rect) => rect.left < -2 || rect.right > window.innerWidth + 2);
        return {
          navHeight: nav?.getBoundingClientRect().height || 0,
          horizontalOverflow: doc.scrollWidth - doc.clientWidth,
          overflowingButtons,
        };
      });

      assert.ok(layout.horizontalOverflow <= 2, `${pageInfo.name}/${viewport.name}: page should not create horizontal overflow; overflow=${layout.horizontalOverflow}`);
      assert.ok(layout.navHeight <= (viewport.name === 'desktop' ? 92 : 90), `${pageInfo.name}/${viewport.name}: closed nav should stay compact; height=${layout.navHeight}`);
      assert.deepEqual(layout.overflowingButtons, [], `${pageInfo.name}/${viewport.name}: buttons should fit inside the viewport`);

      if (pageInfo.name !== 'home' && viewport.name !== 'desktop') {
        await page.click('#docs-toggle');
        await page.waitForTimeout(350);
        const sidebarOpen = await page.evaluate(() => {
          const sidebar = document.querySelector('#docs-sidebar');
          const toggle = document.querySelector('#docs-toggle');
          const sidebarRect = sidebar.getBoundingClientRect();
          const toggleRect = toggle.getBoundingClientRect();
          const chat = document.querySelector('.site-chat-toggle');
          const chatRect = chat?.getBoundingClientRect();
          return {
            expanded: toggle.getAttribute('aria-expanded'),
            hidden: sidebar.getAttribute('aria-hidden'),
            left: sidebarRect.left,
            right: sidebarRect.right,
            toggleRight: toggleRect.right,
            chatLeft: chatRect?.left ?? window.innerWidth,
          };
        });
        assert.equal(sidebarOpen.expanded, 'true', `${pageInfo.name}/${viewport.name}: docs toggle should expose open state`);
        assert.equal(sidebarOpen.hidden, 'false', `${pageInfo.name}/${viewport.name}: sidebar should expose visible state`);
        assert.ok(sidebarOpen.left >= -2 && sidebarOpen.right <= viewport.width * 0.86, `${pageInfo.name}/${viewport.name}: sidebar should fit inside mobile viewport`);
        assert.ok(sidebarOpen.toggleRight <= sidebarOpen.chatLeft - 8, `${pageInfo.name}/${viewport.name}: docs toggle should not collide with chat toggle`);
        await page.keyboard.press('Escape');
        await page.waitForTimeout(350);
        const sidebarClosed = await page.locator('#docs-toggle').getAttribute('aria-expanded');
        assert.equal(sidebarClosed, 'false', `${pageInfo.name}/${viewport.name}: Escape should close docs sidebar`);
      }

      if (pageInfo.name !== 'home') {
        await page.screenshot({ path: `output/playwright/mobile-smoke-${pageInfo.name}-${viewport.name}.png`, fullPage: false });
        await page.close();
        assert.deepEqual(errors, [], `${pageInfo.name}/${viewport.name}: browser console should not report errors`);
        continue;
      }

      await page.waitForSelector('#vd-model-stage', { timeout: 15000 });
      await page.waitForTimeout(3300);

      if (viewport.name !== 'desktop') {
        const initialMobile = await page.evaluate(() => {
          const heroContent = document.querySelector('.hero-intro-content');
          const hero = document.querySelector('#hero');
          return {
            heroOpacity: Number(getComputedStyle(heroContent).opacity),
            heroHeight: hero.getBoundingClientRect().height,
          };
        });

        await page.evaluate(() => {
          const section = document.querySelector('#video-demo');
          const top = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo(0, top);
        });
        await page.waitForTimeout(700);

        const mobileDemoStart = await page.evaluate(() => {
          const nav = document.querySelector('nav');
          const title = document.querySelector('.vd-title');
          const visual = document.querySelector('#vd-model-stage');
          const activeStep = document.querySelector('.vd-step.is-active');
          const chat = document.querySelector('.site-chat-toggle');
          const navRect = nav.getBoundingClientRect();
          const titleRect = title.getBoundingClientRect();
          const visualRect = visual.getBoundingClientRect();
          const stepRect = activeStep.getBoundingClientRect();
          const chatRect = chat.getBoundingClientRect();
          return {
            navBottom: navRect.bottom,
            titleTop: titleRect.top,
            titleBottom: titleRect.bottom,
            visualTop: visualRect.top,
            visualWidth: visualRect.width,
            visualHeight: visualRect.height,
            stepBottom: stepRect.bottom,
            chatTop: chatRect.top,
            videoPaused: document.querySelector('#demo-video').paused,
            videoTime: document.querySelector('#demo-video').currentTime,
            groupCenter: (titleRect.top + stepRect.bottom) / 2,
          };
        });
        await page.screenshot({ path: `output/playwright/mobile-demo-start-${viewport.name}.png`, fullPage: false });

        assert.ok(initialMobile.heroOpacity >= 0.95, `${viewport.name}: hero content should not fade out into a blank panel; opacity=${initialMobile.heroOpacity}`);
        assert.ok(initialMobile.heroHeight >= viewport.height * 0.96, `${viewport.name}: hero should own the first viewport so the next title is not clipped; height=${initialMobile.heroHeight}`);
        assert.ok(mobileDemoStart.titleTop >= mobileDemoStart.navBottom + 8, `${viewport.name}: video title should sit below fixed nav; titleTop=${mobileDemoStart.titleTop}, navBottom=${mobileDemoStart.navBottom}`);
        assert.ok(mobileDemoStart.titleBottom <= viewport.height * 0.38, `${viewport.name}: centered video title should stay clear of the lower content; bottom=${mobileDemoStart.titleBottom}`);
        assert.ok(mobileDemoStart.visualWidth >= Math.min(320, viewport.width - 40), `${viewport.name}: laptop visual should be large enough; width=${mobileDemoStart.visualWidth}`);
        assert.ok(mobileDemoStart.visualTop <= viewport.height * 0.58, `${viewport.name}: laptop should appear before the lower half gets empty; top=${mobileDemoStart.visualTop}`);
        assert.ok(mobileDemoStart.groupCenter >= viewport.height * 0.43 && mobileDemoStart.groupCenter <= viewport.height * 0.66, `${viewport.name}: video demo group should sit near the vertical center; center=${mobileDemoStart.groupCenter}`);
        assert.ok(mobileDemoStart.stepBottom <= mobileDemoStart.chatTop - 16, `${viewport.name}: active step should not collide with chat button; stepBottom=${mobileDemoStart.stepBottom}, chatTop=${mobileDemoStart.chatTop}`);
        assert.equal(mobileDemoStart.videoPaused, false, `${viewport.name}: mobile demo start should show an open playing laptop, not a black closed tile`);
        assert.ok(mobileDemoStart.videoTime > 0, `${viewport.name}: mobile demo start should seek into the video; time=${mobileDemoStart.videoTime}`);
      }

      await page.evaluate(() => {
        const section = document.querySelector('#video-demo');
        const top = section.getBoundingClientRect().top + window.scrollY;
        const end = top + section.offsetHeight - window.innerHeight;
        window.scrollTo(0, top + (end - top) * 0.62);
      });
      await page.waitForTimeout(2000);

      const first = await page.evaluate(() => {
        const video = document.querySelector('#demo-video');
        const activeStep = document.querySelector('.vd-step.is-active');
        const visual = document.querySelector('#vd-model-stage');
        const visualRect = visual.getBoundingClientRect();
        return {
          activeText: activeStep?.innerText || '',
          time: video.currentTime,
          paused: video.paused,
          visualWidth: visualRect.width,
          visualHeight: visualRect.height,
        };
      });

      await page.waitForTimeout(1200);

      const second = await page.evaluate(() => {
        const video = document.querySelector('#demo-video');
        return {
          time: video.currentTime,
          paused: video.paused,
        };
      });

      await page.screenshot({ path: `output/playwright/glb-video-browser-smoke-${viewport.name}.png`, fullPage: false });
      await page.close();

      assert.match(first.activeText, /04\s+Deploy to production/, `${viewport.name}: deployment step should be active at the main video scroll point`);
      assert.equal(first.paused, false, `${viewport.name}: demo video should be playing when the laptop screen is visible`);
      assert.equal(second.paused, false, `${viewport.name}: demo video should keep playing while the laptop screen remains visible`);
      assert.ok(second.time - first.time > 0.5, `${viewport.name}: demo video should advance while visible; advanced by ${second.time - first.time}s`);
      assert.ok(first.visualWidth > 0 && first.visualHeight > 0, `${viewport.name}: laptop visual should have visible dimensions`);
      assert.deepEqual(errors, [], `${pageInfo.name}/${viewport.name}: browser console should not report errors`);
    }
  }

  await browser.close();
} finally {
  server.kill();
}
