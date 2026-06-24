import assert from 'node:assert/strict';
import fs from 'node:fs';

const mainJs = fs.readFileSync('js/main.js', 'utf8');
const stylesCss = fs.readFileSync('css/styles.css', 'utf8');

assert.match(
  mainJs,
  /function setupMobileVideoFallback\(\) \{[\s\S]*modelStage\.classList\.add\('is-mobile-fallback'\);[\s\S]*video\.defaultMuted = true;[\s\S]*video\.autoplay = true;[\s\S]*video\.setAttribute\('autoplay', ''\);[\s\S]*video\.play\(\)\.catch\(\(\) => \{\}\);[\s\S]*\}/,
  'mobile video demo should use the image MacBook fallback with a normal inline video'
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
  'mobile fallback should allow tapping the MacBook to start playback'
);

assert.match(
  mainJs,
  /if \(isMobile\) \{[\s\S]*setupMobileVideoFallback\(\);[\s\S]*\} else \{[\s\S]*initLaptopScene\(\)\.then/,
  'mobile video demo should skip the Three.js laptop scene'
);

assert.match(
  mainJs,
  /if \(isMobile\) \{[\s\S]*gsap\.set\(laptopWrap, \{ clearProps: 'transform,opacity' \}\);[\s\S]*\} else \{[\s\S]*gsap\.fromTo\(laptopWrap,/,
  'mobile MacBook fallback should not run the desktop entrance transform animation'
);

assert.match(
  stylesCss,
  /@media \(max-width: 560px\) \{[\s\S]*\.vd-model-stage\.is-mobile-fallback \.vd-model-canvas\s*{[\s\S]*display: none;[\s\S]*\}/,
  'mobile fallback should hide the WebGL canvas'
);

assert.match(
  stylesCss,
  /@media \(max-width: 560px\) \{[\s\S]*\.vd-model-stage\.is-mobile-fallback \.vd-model-fallback\s*{[\s\S]*display: block;[\s\S]*\}/,
  'mobile fallback should show the MacBook image frame'
);

assert.match(
  stylesCss,
  /@media \(max-width: 560px\) \{[\s\S]*\.vd-model-stage\.is-mobile-fallback \.vd-demo-video\s*{[\s\S]*position: absolute;[\s\S]*object-fit: cover;[\s\S]*\}/,
  'mobile fallback should place the real demo video inside the MacBook screen'
);
