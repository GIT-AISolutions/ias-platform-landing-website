import assert from 'node:assert/strict';
import fs from 'node:fs';

const appPy = fs.readFileSync('app.py', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const mainJs = fs.readFileSync('js/main.js', 'utf8');
const robotsTxt = fs.readFileSync('robots.txt', 'utf8');
const sitemapXml = fs.readFileSync('sitemap.xml', 'utf8');
const llmsTxt = fs.readFileSync('llms.txt', 'utf8');

assert.match(appPy, /@app\.get\("\/llms\.txt"\)[\s\S]*return FileResponse\("llms\.txt"/, 'backend should serve llms.txt for AI crawlers');
assert.match(appPy, /@app\.get\("\/docs"\)[\s\S]*return FileResponse\("docs\.html"\)/, 'backend should serve the clean docs URL');
assert.match(appPy, /@app\.get\("\/terms"\)[\s\S]*return FileResponse\("legal\.html"\)/, 'backend should serve clean legal section URLs');
assert.match(appPy, /@app\.get\("\/pricing"\)[\s\S]*return FileResponse\("index\.html"\)/, 'backend should serve clean homepage section URLs');

assert.match(robotsTxt, /Sitemap: https:\/\/opencodie\.com\/sitemap\.xml/, 'robots.txt should expose the sitemap');
assert.match(robotsTxt, /LLMs: https:\/\/opencodie\.com\/llms\.txt/, 'robots.txt should expose the AI crawler summary');
assert.match(sitemapXml, /<loc>https:\/\/opencodie\.com\/<\/loc>/, 'sitemap should include the homepage');
assert.match(sitemapXml, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/, 'sitemap URLs should include lastmod dates');

assert.match(llmsTxt, /^# OpenCodie/m, 'llms.txt should identify OpenCodie');
assert.match(llmsTxt, /## Summary[\s\S]*developer platform/, 'llms.txt should provide an AI-readable product summary');
assert.match(llmsTxt, /## Primary URLs[\s\S]*https:\/\/opencodie\.com\//, 'llms.txt should list canonical URLs');
assert.match(llmsTxt, /## Pricing[\s\S]*Launch[\s\S]*Build[\s\S]*Team/, 'llms.txt should summarize plans for answer engines');

assert.match(indexHtml, /<meta name="theme-color" content="#060d15" \/>/, 'homepage should expose theme color metadata');
assert.match(indexHtml, /<meta property="og:image:alt"\s+content="OpenCodie logo" \/>/, 'homepage should expose accessible Open Graph image alt text');
assert.doesNotMatch(indexHtml, /href="#(?:hero|platform|pricing|contact|faq)"/, 'homepage navigation and footer should use clean URLs instead of hash links');
assert.match(mainJs, /preventDefault\(\)[\s\S]*history\.pushState\([\s\S]*scrollToHomeSection/, 'homepage clean URL clicks should keep one-page scrolling behavior');
assert.match(indexHtml, /"@type": "SoftwareApplication"[\s\S]*"applicationCategory": "DeveloperApplication"/, 'homepage should include SoftwareApplication structured data');
assert.match(indexHtml, /"@type": "FAQPage"[\s\S]*"What is OpenCodie\?"[\s\S]*"Do I need DevOps\?"/, 'homepage should include FAQPage structured data');
assert.match(indexHtml, /"@type": "Offer"[\s\S]*"price": "9"[\s\S]*"price": "19"[\s\S]*"price": "49"/, 'homepage should include pricing offers in structured data');
