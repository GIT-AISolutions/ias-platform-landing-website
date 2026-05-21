import assert from 'node:assert/strict';
import fs from 'node:fs';

const appPy = fs.readFileSync('app.py', 'utf8');
const mainJs = fs.readFileSync('js/main.js', 'utf8');
const envExample = fs.readFileSync('.env.example', 'utf8');

assert.match(appPy, /class ContactRequest\(BaseModel\):[\s\S]*name: str[\s\S]*email: str[\s\S]*subject: str[\s\S]*message: str/, 'backend should define a typed contact request payload');
assert.match(appPy, /@app\.post\("\/api\/contact"\)/, 'backend should expose a contact form endpoint');
assert.match(appPy, /CONTACT_RECIPIENT_EMAIL", "contact\.innovative\.ai@gmail\.com"/, 'contact email should default to the requested Gmail recipient');
assert.match(appPy, /GMAIL_SMTP_USERNAME/, 'backend should read Gmail username from environment');
assert.match(appPy, /GMAIL_APP_PASSWORD/, 'backend should read Gmail app password from environment');
assert.match(appPy, /smtplib\.SMTP_SSL/, 'backend should send contact email through Gmail SMTP over SSL');
assert.match(appPy, /msg\["Reply-To"\] = request\.email/, 'contact email should preserve the visitor email as Reply-To');

assert.match(mainJs, /fetch\('\/api\/contact',\s*\{[\s\S]*method: 'POST'[\s\S]*JSON\.stringify\(payload\)/, 'contact form should submit JSON to the backend endpoint');
assert.match(mainJs, /if \(!response\.ok\) throw new Error/, 'contact form should surface backend send failures');
assert.match(mainJs, /submitButton\.disabled = true/, 'contact form should prevent duplicate submissions while sending');

assert.match(envExample, /GMAIL_SMTP_USERNAME=contact\.innovative\.ai@gmail\.com/, 'env example should document Gmail SMTP username');
assert.match(envExample, /GMAIL_APP_PASSWORD=/, 'env example should document Gmail app password');
assert.match(envExample, /CONTACT_RECIPIENT_EMAIL=contact\.innovative\.ai@gmail\.com/, 'env example should document contact recipient');
