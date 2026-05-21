import assert from 'node:assert/strict';
import fs from 'node:fs';

const appPy = fs.readFileSync('app.py', 'utf8');
const mainJs = fs.readFileSync('js/main.js', 'utf8');
const stylesCss = fs.readFileSync('css/styles.css', 'utf8');
const envExample = fs.readFileSync('.env.example', 'utf8');

assert.match(appPy, /STACKAI_API_URL = os\.getenv\([\s\S]*"STACKAI_API_URL"/, 'StackAI URL should be configurable from Coolify env');
assert.match(envExample, /STACKAI_API_URL=https:\/\/api\.stackai\.com\/inference\/v0\/run\//, 'env example should document StackAI API URL');

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

assert.match(stylesCss, /\.site-chat-panel\s*{[\s\S]*width: min\(430px, calc\(100vw - 2rem\)\);/, 'chat panel should be wide enough for markdown answers without feeling cramped');
assert.match(stylesCss, /\.site-chat-log\s*{[\s\S]*gap: 0\.75rem;[\s\S]*padding: 1rem 1rem 1\.125rem;/, 'chat log should space messages and keep content clear of the input form');
assert.match(stylesCss, /\.site-chat-msg-body\s*{[\s\S]*min-width: 0;[\s\S]*overflow-wrap: anywhere;/, 'chat message body should wrap long markdown content inside the panel');
assert.match(stylesCss, /\.site-chat-msg\.bot\s*{[\s\S]*max-width: 100%;/, 'bot messages should use the available chat width for longer answers');
assert.match(stylesCss, /\.site-chat-form\s*{[\s\S]*border-top: 1px solid var\(--opencodie-border\);/, 'chat input should be visually separated from the scrollable log');

assert.match(envExample, /GMAIL_SMTP_USERNAME=contact\.innovative\.ai@gmail\.com/, 'env example should document Gmail SMTP username');
assert.match(envExample, /GMAIL_APP_PASSWORD=/, 'env example should document Gmail app password');
assert.match(envExample, /CONTACT_RECIPIENT_EMAIL=contact\.innovative\.ai@gmail\.com/, 'env example should document contact recipient');
