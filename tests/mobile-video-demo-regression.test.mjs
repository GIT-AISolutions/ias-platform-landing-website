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
  /video\.loop = true;[\s\S]*video\.play\(\)\.catch\(\(\) => \{\}\);/,
  'mobile video demo should proactively kick off muted playback once the scene is ready'
);
