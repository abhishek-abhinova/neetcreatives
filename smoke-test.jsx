import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import App from './src/App.jsx';

try {
  const html = renderToString(createElement(App));
  const checks = [
    'IMPOSSIBLE TO IGNORE',
    'DIGITAL SERVICES THAT',
    'FROM IDEA TO',
    'WHY BRANDS CHOOSE',
    'DIGITAL GROWTH PARTNER',
    'CREATIVE WORK THAT',
    'DIGITAL SHOWROOM',
    'SIMPLE PRICING',
    'TO LAUNCH.',
    'SAY',
    'SOMETHING GREAT.',
    'READY TO MAKE YOUR BRAND',
    'wa.me/917050408313',
    'Garhwa Town, Jharkhand',
    '₹7,999',
    '₹4,999',
    '₹2,999',
    'Ad budget not included',
    'Starting prices are indicative',
    'neetcreatives.com',
    '© 2026 Neet Creatives',
  ];
  const missing = checks.filter((c) => !html.includes(c));
  if (missing.length) {
    console.error('MISSING CONTENT:', missing);
    process.exit(1);
  }
  console.log('SMOKE TEST PASSED — all', checks.length, 'content checks found. HTML length:', html.length);
} catch (e) {
  console.error('RENDER ERROR:', e);
  process.exit(1);
}
