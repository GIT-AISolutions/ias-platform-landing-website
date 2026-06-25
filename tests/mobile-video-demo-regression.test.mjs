import assert from 'node:assert/strict';
import fs from 'node:fs';

const mainJs = fs.readFileSync('js/main.js', 'utf8');
const stylesCss = fs.readFileSync('css/styles.css', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

function ruleBody(selector) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = stylesCss.match(new RegExp(`${escapedSelector}\\s*\\{([^}]*)\\}`));
  assert.ok(match, `Expected CSS rule for ${selector}`);
  return match[1];
}

assert.match(
  mainJs,
  /function setupMobileVideoFallback\(\) \{[\s\S]*modelStage\.classList\.add\('is-mobile-fallback'\);[\s\S]*video\.defaultMuted = true;[\s\S]*video\.autoplay = true;[\s\S]*video\.setAttribute\('autoplay', ''\);[\s\S]*video\.play\(\)\.catch\(\(\) => \{\}\);[\s\S]*\}/,
  'mobile video demo should use a normal inline video fallback'
);

assert.doesNotMatch(
  mainJs,
  /video\.setAttribute\('poster'/,
  'mobile video-only fallback should not inject a still image poster'
);

assert.match(
  mainJs,
  /function retryMobileVideoPlayback\(\) \{[\s\S]*video\.play\(\)\.catch\(\(\) => \{\}\);[\s\S]*\}/,
  'mobile fallback should retry playback from a user gesture when mobile Safari blocks initial autoplay'
);

assert.match(
  mainJs,
  /window\.addEventListener\('touchstart', retryMobileVideoPlayback, \{ passive: true, once: true \}\);[\s\S]*window\.addEventListener\('scroll', retryMobileVideoPlayback, \{ passive: true, once: true \}\);/,
  'mobile fallback should retry playback on first touch and scroll'
);

assert.match(
  mainJs,
  /new IntersectionObserver\(\(entries\) => \{[\s\S]*if \(entry\.isIntersecting\) retryMobileVideoPlayback\(\);[\s\S]*threshold: 0\.35[\s\S]*\}\);[\s\S]*mobileVideoObserver\.observe\(outer\);/,
  'mobile fallback should retry playback when the video section becomes visible'
);

assert.match(
  mainJs,
  /modelStage\.addEventListener\('click', retryMobileVideoPlayback\);[\s\S]*modelStage\.addEventListener\('touchend', retryMobileVideoPlayback, \{ passive: true \}\);/,
  'mobile fallback should allow tapping the video area to start playback'
);

assert.match(
  mainJs,
  /if \(isMobile\) \{[\s\S]*setupMobileVideoFallback\(\);[\s\S]*\} else \{[\s\S]*initLaptopScene\(\)\.then/,
  'mobile video demo should skip the Three.js laptop scene'
);

assert.match(
  mainJs,
  /if \(isMobile\) \{[\s\S]*gsap\.set\(laptopWrap, \{ clearProps: 'transform,opacity' \}\);[\s\S]*\} else \{[\s\S]*gsap\.fromTo\(laptopWrap,/,
  'mobile video fallback should not run the desktop entrance transform animation'
);

assert.match(
  stylesCss,
  /@media \(max-width: 560px\) \{[\s\S]*\.vd-model-stage\.is-mobile-fallback \.vd-model-canvas\s*{[\s\S]*display: none;[\s\S]*\}/,
  'mobile fallback should hide the WebGL canvas'
);

const mobileFrameRule = ruleBody('.vd-model-stage.is-mobile-fallback .vd-model-fallback');
assert.match(mobileFrameRule, /display: none;/, 'mobile fallback should hide the MacBook image frame');

const mobileVideoRule = ruleBody('.vd-model-stage.is-mobile-fallback .vd-demo-video');
assert.match(mobileVideoRule, /position: relative;/, 'mobile video should participate in normal mobile layout');
assert.match(mobileVideoRule, /display: block;/, 'mobile video should be visible as the primary element');
assert.match(mobileVideoRule, /width: 100%;/, 'mobile video should fill the mobile visual column');
assert.match(mobileVideoRule, /aspect-ratio: 16 \/ 9;/, 'mobile video should keep a stable 16:9 frame');
assert.match(mobileVideoRule, /border-radius: 18px;/, 'mobile video should have rounded corners');
assert.match(mobileVideoRule, /object-fit: cover;/, 'mobile video should cover its rounded frame');

assert.match(
  indexHtml,
  /css\/styles\.css\?v=47/,
  'homepage should request a fresh stylesheet version for the mobile video-only fallback'
);

assert.match(
  indexHtml,
  /js\/main\.js\?v=114/,
  'homepage should request a fresh script version for the mobile video-only fallback'
);
