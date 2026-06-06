import assert from 'node:assert/strict';
import fs from 'node:fs';

const mainJs = fs.readFileSync('js/main.js', 'utf8');

assert.match(
  mainJs,
  /function getVisualProgress\(progress\) \{[\s\S]*return progress;[\s\S]*\}/,
  'mobile video demo should start from the same frame-zero scroll progress as desktop'
);

assert.match(
  mainJs,
  /function updateVideoPlayback\(lidT\) \{[\s\S]*const shouldPlay = lidT > 0\.18 && !closedOverride;[\s\S]*video\.play\(\)\.catch\(\(\) => \{\}\);[\s\S]*video\.pause\(\);[\s\S]*\}/,
  'video playback should be controlled by laptop screen visibility during the animation'
);

assert.doesNotMatch(
  mainJs,
  /video\.loop = true;[\s\S]*video\.play\(\)\.catch\(\(\) => \{\}\);/,
  'video should not start free-running during scene initialization before the laptop screen is visible'
);
