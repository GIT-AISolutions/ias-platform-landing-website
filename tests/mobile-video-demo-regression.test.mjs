import assert from 'node:assert/strict';
import fs from 'node:fs';

const mainJs = fs.readFileSync('js/main.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

assert.match(
  indexHtml,
  /<script type="module" src="js\/main\.js\?v=114"><\/script>/,
  'homepage should request a fresh main.js URL after the mobile video playback fix'
);

assert.match(
  mainJs,
  /function getVisualProgress\(progress\) \{[\s\S]*return isMobile \? Math\.max\(progress, VIDEO_DEMO_CONFIG\.mobileStartProgress\) : progress;[\s\S]*\}/,
  'mobile video demo should start with the laptop open enough for the video to play'
);

assert.match(
  mainJs,
  /function updateVideoPlayback\(lidT\) \{[\s\S]*const shouldPlay = lidT > 0\.18 && !closedOverride;[\s\S]*video\.play\(\)\.catch\(\(\) => \{\}\);[\s\S]*video\.pause\(\);[\s\S]*\}/,
  'video playback should be controlled by laptop screen visibility during the animation'
);

assert.match(
  mainJs,
  /new THREE\.VideoTexture\(video\)/,
  'mobile browsers should use the HTML video element directly as the Three.js texture'
);

assert.doesNotMatch(
  mainJs,
  /videoCtx\.drawImage\(video/,
  'mobile browsers should not depend on drawing the video into an intermediate canvas texture'
);

assert.doesNotMatch(
  mainJs,
  /video\.loop = true;[\s\S]*video\.play\(\)\.catch\(\(\) => \{\}\);/,
  'video should not start free-running during scene initialization before the laptop screen is visible'
);
