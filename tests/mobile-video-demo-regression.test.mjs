import assert from 'node:assert/strict';
import fs from 'node:fs';

const mainJs = fs.readFileSync('js/main.js', 'utf8');
const stylesCss = fs.readFileSync('css/styles.css', 'utf8');

assert.match(
  mainJs,
  /const isMobile = window\.matchMedia\('\(max-width: 560px\)'\)\.matches;/,
  'mobile video demo should explicitly detect the phone layout'
);

assert.match(
  mainJs,
  /function getVisualProgress\(progress\) \{[\s\S]*return isMobile \? Math\.max\(progress, VIDEO_DEMO_CONFIG\.mobileStartProgress\) : progress;[\s\S]*\}/,
  'mobile video demo should clamp visual progress so the laptop starts open enough to show playing video'
);

assert.match(
  stylesCss,
  /@media \(max-width: 560px\) \{[\s\S]*\.vd-layout\s*{[\s\S]*align-content: center;[\s\S]*justify-items: center;/,
  'mobile video demo layout should keep the title, laptop, and active step centered as one stack'
);
