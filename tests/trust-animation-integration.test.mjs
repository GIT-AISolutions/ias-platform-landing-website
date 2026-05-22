import assert from 'node:assert/strict';
import fs from 'node:fs';

const mainJs = fs.readFileSync('js/main.js', 'utf8');

assert.match(
  mainJs,
  /gsap\.set\(trustItems, \{ y: 18, opacity: 0 \}\);[\s\S]*function animateTrustItems\(\) \{[\s\S]*gsap\.killTweensOf\(trustItems\);[\s\S]*clearProps: 'transform,opacity'/,
  'trust strip animation should start hidden and clear temporary transform and opacity after reveal'
);

assert.match(
  mainJs,
  /ScrollTrigger\.create\(\{[\s\S]*trigger: '#trust'[\s\S]*once: true[\s\S]*animateTrustItems\(\)/,
  'trust strip should use a stable section-level ScrollTrigger'
);

assert.doesNotMatch(
  mainJs,
  /gsap\.fromTo\(trustItems,[\s\S]*scrollTrigger: \{ trigger: '#trust', start: 'top 85%', once: true \}/,
  'trust strip should not leave reveal state controlled by an inline tween ScrollTrigger'
);
