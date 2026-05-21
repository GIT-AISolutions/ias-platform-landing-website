import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';

const require = createRequire(import.meta.url);
const PORT = Number(process.env.SMOKE_PORT || 4173);
const BASE_URL = `http://127.0.0.1:${PORT}`;
const VIEWPORTS = [
  { name: 'desktop', width: 1280, height: 860 },
  { name: 'mobile', width: 390, height: 844 },
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

async function waitForServer(url, timeoutMs = 8000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
  }
  throw new Error(`Timed out waiting for ${url}`);
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

try {
  await waitForServer(BASE_URL);

  const { chromium } = loadPlaywright();
  const browser = await launchBrowser(chromium);

  for (const viewport of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
    const errors = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));

    await page.goto(`${BASE_URL}/?browser-smoke=${viewport.name}`, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => localStorage.setItem('cookie-consent', 'accepted'));
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#vd-model-canvas', { timeout: 15000 });
    await page.waitForTimeout(4500);

    if (viewport.name === 'mobile') {
      const initialMobile = await page.evaluate(() => {
        const nav = document.querySelector('nav');
        const heroContent = document.querySelector('.hero-intro-content');
        const doc = document.documentElement;
        return {
          navHeight: nav.getBoundingClientRect().height,
          heroOpacity: Number(getComputedStyle(heroContent).opacity),
          horizontalOverflow: doc.scrollWidth - doc.clientWidth,
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
        const canvas = document.querySelector('#vd-model-canvas');
        const activeStep = document.querySelector('.vd-step.is-active');
        const chat = document.querySelector('.site-chat-toggle');
        const navRect = nav.getBoundingClientRect();
        const titleRect = title.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        const stepRect = activeStep.getBoundingClientRect();
        const chatRect = chat.getBoundingClientRect();
        return {
          navBottom: navRect.bottom,
          titleTop: titleRect.top,
          titleBottom: titleRect.bottom,
          canvasTop: canvasRect.top,
          canvasWidth: canvasRect.width,
          canvasHeight: canvasRect.height,
          stepBottom: stepRect.bottom,
          chatTop: chatRect.top,
        };
      });

      assert.ok(initialMobile.navHeight <= 90, `mobile: closed nav should stay compact; height=${initialMobile.navHeight}`);
      assert.ok(initialMobile.heroOpacity >= 0.95, `mobile: hero content should not fade out into a blank panel; opacity=${initialMobile.heroOpacity}`);
      assert.ok(initialMobile.horizontalOverflow <= 2, `mobile: page should not create horizontal overflow; overflow=${initialMobile.horizontalOverflow}`);
      assert.ok(mobileDemoStart.titleTop >= mobileDemoStart.navBottom + 8, `mobile: video title should sit below fixed nav; titleTop=${mobileDemoStart.titleTop}, navBottom=${mobileDemoStart.navBottom}`);
      assert.ok(mobileDemoStart.titleBottom <= viewport.height * 0.32, `mobile: video title should stay in the upper safe area; bottom=${mobileDemoStart.titleBottom}`);
      assert.ok(mobileDemoStart.canvasWidth >= 330, `mobile: laptop canvas should be large enough; width=${mobileDemoStart.canvasWidth}`);
      assert.ok(mobileDemoStart.canvasTop <= viewport.height * 0.58, `mobile: laptop should appear before the lower half gets empty; top=${mobileDemoStart.canvasTop}`);
      assert.ok(mobileDemoStart.stepBottom <= mobileDemoStart.chatTop - 16, `mobile: active step should not collide with chat button; stepBottom=${mobileDemoStart.stepBottom}, chatTop=${mobileDemoStart.chatTop}`);
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
      const canvas = document.querySelector('#vd-model-canvas');
      return {
        activeText: activeStep?.innerText || '',
        time: video.currentTime,
        paused: video.paused,
        canvasWidth: canvas.getBoundingClientRect().width,
        canvasHeight: canvas.getBoundingClientRect().height,
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
    assert.ok(first.canvasWidth > 0 && first.canvasHeight > 0, `${viewport.name}: canvas should have visible dimensions`);
    assert.deepEqual(errors, [], `${viewport.name}: browser console should not report errors`);
  }

  await browser.close();
} finally {
  server.kill();
}
