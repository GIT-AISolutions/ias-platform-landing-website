import assert from 'node:assert/strict';
import fs from 'node:fs';

const mainJs = fs.readFileSync('js/main.js', 'utf8');
const stylesCss = fs.readFileSync('css/styles.css', 'utf8');

assert.match(
  mainJs,
  /function setupMobileVideoFallback\(\) \{[\s\S]*modelStage\.classList\.add\('is-mobile-fallback'\);[\s\S]*video\.play\(\)\.catch\(\(\) => \{\}\);[\s\S]*\}/,
  'mobile video demo should use the image MacBook fallback with a normal inline video'
);

assert.match(
  mainJs,
  /if \(isMobile\) \{[\s\S]*setupMobileVideoFallback\(\);[\s\S]*\} else \{[\s\S]*initLaptopScene\(\)\.then/,
  'mobile video demo should skip the Three.js laptop scene'
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
