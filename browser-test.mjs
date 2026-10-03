import { chromium } from 'playwright-core';
import { spawn } from 'child_process';

const server = spawn('npx', ['vite', 'preview', '--port', '4173', '--strictPort'], {
  cwd: process.cwd(),
  shell: true,
});

await new Promise((r) => setTimeout(r, 3500));

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  args: ['--no-sandbox'],
});

const errors = [];
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push('CONSOLE: ' + msg.text());
});
page.on('pageerror', (err) => errors.push('PAGEERROR: ' + err.message));

await page.goto('http://localhost:4173', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2500);

const h1 = await page.locator('h1').first().textContent();
console.log('H1:', h1.replace(/\s+/g, ' ').trim());

const overflowX = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
console.log('Horizontal overflow px:', overflowX);

await page.screenshot({ path: 'shots/desktop-hero.png' });

await page.evaluate(() => document.querySelector('#services')?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: 'shots/desktop-services.png' });

await page.evaluate(() => document.querySelector('#pricing')?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: 'shots/desktop-pricing.png' });

await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView());
await page.waitForTimeout(1200);
await page.screenshot({ path: 'shots/desktop-contact.png' });

// Mobile checks
const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
mob.on('console', (msg) => {
  if (msg.type() === 'error') errors.push('MOBILE CONSOLE: ' + msg.text());
});
mob.on('pageerror', (err) => errors.push('MOBILE PAGEERROR: ' + err.message));
await mob.goto('http://localhost:4173', { waitUntil: 'networkidle', timeout: 30000 });
await mob.waitForTimeout(2000);
const mobOverflow = await mob.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
console.log('Mobile horizontal overflow px:', mobOverflow);
await mob.screenshot({ path: 'shots/mobile-hero.png' });

// Mobile menu test
await mob.locator('button[aria-label="Open menu"]').click();
await mob.waitForTimeout(700);
await mob.screenshot({ path: 'shots/mobile-menu.png' });
const menuVisible = await mob.locator('text=Services').first().isVisible();
console.log('Mobile menu opens:', menuVisible);

// FAQ accordion test
await mob.locator('button[aria-label="Close menu"]').click().catch(() => {});
await mob.evaluate(() => document.querySelector('#faq')?.scrollIntoView());
await mob.waitForTimeout(800);
const faqButtons = mob.locator('button[aria-expanded]');
await faqButtons.nth(1).click();
await mob.waitForTimeout(500);
const expanded = await faqButtons.nth(1).getAttribute('aria-expanded');
console.log('FAQ accordion toggles:', expanded === 'true');

// Portfolio filter test
await mob.evaluate(() => document.querySelector('#work')?.scrollIntoView());
await mob.waitForTimeout(800);
await mob.locator('button:has-text("Ads")').click();
await mob.waitForTimeout(700);
const cards = await mob.locator('#work article').count();
console.log('Portfolio filter "Ads" card count:', cards);

// Form submit test (intercept window.open)
await mob.evaluate(() => {
  window.__opened = [];
  window.open = (url) => { window.__opened.push(url); return null; };
});
await mob.evaluate(() => document.querySelector('#contact')?.scrollIntoView());
await mob.waitForTimeout(600);
await mob.fill('#name', 'Test User');
await mob.fill('#phone', '9999999999');
await mob.selectOption('#service', 'Meta Ads');
await mob.locator('button[type="submit"]').click();
await mob.waitForTimeout(600);
const opened = await mob.evaluate(() => window.__opened);
console.log('Form opens WhatsApp:', opened.length > 0 && opened[0].includes('wa.me/917050408313'));

console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO CONSOLE/PAGE ERRORS');

await browser.close();
server.kill();
process.exit(errors.length ? 1 : 0);
