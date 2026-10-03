import { chromium } from 'playwright-core';
import { spawn } from 'child_process';

const server = spawn('npx', ['vite', 'preview', '--port', '4174', '--strictPort'], { shell: true });
await new Promise((r) => setTimeout(r, 3500));

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto('http://localhost:4174', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const res = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const clipped = (el) => {
    let p = el.parentElement;
    while (p) {
      const o = getComputedStyle(p).overflowX;
      if (o === 'hidden' || o === 'clip' || o === 'auto' || o === 'scroll') return true;
      p = p.parentElement;
    }
    return false;
  };
  const out = [];
  document.querySelectorAll('body *').forEach((el) => {
    const r = el.getBoundingClientRect();
    if ((r.right > vw + 1 || r.left < -1) && !clipped(el)) {
      out.push({
        tag: el.tagName,
        cls: (el.className?.baseVal ?? el.className ?? '').toString().slice(0, 100),
        left: Math.round(r.left),
        right: Math.round(r.right),
        w: Math.round(r.width),
      });
    }
  });
  return { vw, scrollW: document.documentElement.scrollWidth, out: out.slice(0, 20) };
});
console.log('viewport:', res.vw, 'scrollWidth:', res.scrollW);
res.out.forEach((o) => console.log(`${o.tag} left=${o.left} right=${o.right} w=${o.w} :: ${o.cls}`));

await browser.close();
server.kill();
