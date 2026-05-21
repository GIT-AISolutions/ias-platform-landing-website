# Stable GLB Video Version

Current stable snapshot: `backups/stable-glb-video-20260520-174028`

Previous stable snapshot: `backups/stable-glb-scroll-fixed-20260521-093557`

The current restored version uses the `stable-glb-video-20260520-174028` snapshot as the standard known-good fallback.

Use this as the known-good fallback if later tuning breaks the section.

Verification commands for the live files:

```bash
node tests/glb-video-integration.test.mjs
node tests/glb-video-browser-smoke.test.mjs
node --check js/main.js
node --check tests/glb-video-browser-smoke.test.mjs
```
