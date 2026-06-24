import assert from 'node:assert/strict';
import fs from 'node:fs';

const appPy = fs.readFileSync('app.py', 'utf8');

assert.match(
  appPy,
  /@app\.get\("\/video\/Video_opencodie_web\.mp4"\)/,
  'backend should handle the homepage demo MP4 before the generic /video static mount'
);

assert.match(
  appPy,
  /StreamingResponse\([\s\S]*status_code=206/,
  'demo MP4 route should return 206 Partial Content with range headers for mobile Safari'
);

assert.match(
  appPy,
  /"Content-Range": f"bytes \{start\}-\{end\}\/\{file_size\}"/,
  'demo MP4 route should include a Content-Range response header'
);

assert.match(
  appPy,
  /"Accept-Ranges": "bytes"/,
  'demo MP4 route should advertise byte range support'
);

assert.match(
  appPy,
  /status_code=416[\s\S]*Content-Range/,
  'demo MP4 route should reject invalid ranges with 416 and a Content-Range size header'
);
