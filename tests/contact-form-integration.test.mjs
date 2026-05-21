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
assert.match(stylesCss, /\.site-chat\.open \.site-chat-panel\s*{[\s\S]*display: grid;[\s\S]*grid-template-rows: auto minmax\(0, 1fr\) auto auto auto;/, 'chat panel should keep header, log, prompts, error, and input in fixed grid rows');
assert.match(stylesCss, /\.site-chat-log\s*{[\s\S]*gap: 0\.875rem;[\s\S]*overflow-y: auto;[\s\S]*overflow-x: hidden;[\s\S]*padding: 1rem 1\.375rem 1\.125rem 1rem;/, 'chat log should scroll vertically with breathing room before the scrollbar');
assert.match(stylesCss, /\.site-chat-msg\s*{[\s\S]*width: 100%;[\s\S]*max-width: 100%;[\s\S]*padding: 0;[\s\S]*background: transparent;/, 'message wrappers should fill the log while the inner body owns bubble styling');
assert.match(stylesCss, /\.site-chat-msg-body\s*{[\s\S]*min-width: 0;[\s\S]*overflow-wrap: anywhere;/, 'chat message body should wrap long markdown content inside the panel');
assert.match(stylesCss, /\.site-chat-msg\.bot \.site-chat-msg-body\s*{[\s\S]*width: fit-content;[\s\S]*max-width: calc\(100% - 0\.5rem\);[\s\S]*border: 1px solid var\(--opencodie-border\);/, 'bot bubble body should grow only as wide as needed while containing long markdown answers');
assert.match(stylesCss, /\.site-chat-msg\.user \.site-chat-msg-body\s*{[\s\S]*max-width: calc\(84% - 0\.5rem\);[\s\S]*margin: 0\.125rem 0\.25rem 0\.125rem 0;[\s\S]*background: #f97316;/, 'user bubble body should keep spacing above, below, and from the scrollbar');
assert.match(stylesCss, /\.site-chat-form\s*{[\s\S]*flex-shrink: 0;[\s\S]*border-top: 1px solid var\(--opencodie-border\);/, 'chat input should remain fixed below the scrollable log');
assert.match(fs.readFileSync('js/chatbot.js', 'utf8'), /function setMessage\(el, text\) \{[\s\S]*log\.scrollTop = log\.scrollHeight;[\s\S]*\}/, 'chat should scroll to the latest bot answer after markdown is rendered');

assert.match(envExample, /GMAIL_SMTP_USERNAME=contact\.innovative\.ai@gmail\.com/, 'env example should document Gmail SMTP username');
assert.match(envExample, /GMAIL_APP_PASSWORD=/, 'env example should document Gmail app password');
assert.match(envExample, /CONTACT_RECIPIENT_EMAIL=contact\.innovative\.ai@gmail\.com/, 'env example should document contact recipient');
