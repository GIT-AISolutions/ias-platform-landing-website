import assert from 'node:assert/strict';
import fs from 'node:fs';

const mainJs = fs.readFileSync('js/main.js', 'utf8');

assert.match(
  mainJs,
  /ScrollTrigger\.create\(\{[\s\S]*trigger: '#how'[\s\S]*once: true[\s\S]*animateHowStep\(step, i\)/,
  'how-it-works steps should use one section-level trigger so scroll cannot leave individual steps stuck'
);

assert.match(
  mainJs,
  /function animateHowStep\(step, index\) \{[\s\S]*clearProps: 'transform,opacity'[\s\S]*numEl\.textContent = String\(target\)\.padStart\(2, '0'\);/,
  'how-it-works step animation should force its final visible state'
);

assert.doesNotMatch(
  mainJs,
  /trigger: step, start: 'top 88%'/,
  'how-it-works steps should not rely on separate per-step ScrollTriggers'
);
