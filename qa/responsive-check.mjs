import { writeFile } from 'node:fs/promises';

const browser = await fetch('http://127.0.0.1:9223/json/new?file:///D:/Portofolio/index.html', { method: 'PUT' }).then(r => r.json());
const socket = new WebSocket(browser.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });

let id = 0;
const pending = new Map();
const events = new Map();
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    return message.error ? reject(message.error) : resolve(message.result);
  }
  const listeners = events.get(message.method) || [];
  listeners.splice(0).forEach(resolve => resolve(message.params));
};
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const callId = ++id;
  pending.set(callId, { resolve, reject });
  socket.send(JSON.stringify({ id: callId, method, params }));
});
const once = method => new Promise(resolve => {
  const listeners = events.get(method) || [];
  listeners.push(resolve);
  events.set(method, listeners);
});

await send('Page.enable');
await send('Runtime.enable');
const cases = [
  { name: 'desktop-1440x900', width: 1440, height: 900 },
  { name: 'tablet-1024x768', width: 1024, height: 768 },
  { name: 'landscape-844x390', width: 844, height: 390 },
  { name: 'landscape-667x375', width: 667, height: 375 },
  { name: 'portrait-375x812', width: 375, height: 812 }
];
const results = [];
for (const viewport of cases) {
  await send('Emulation.setDeviceMetricsOverride', { width: viewport.width, height: viewport.height, deviceScaleFactor: 1, mobile: viewport.width < 500 });
  const loaded = once('Page.loadEventFired');
  await send('Page.navigate', { url: 'file:///D:/Portofolio/index.html' });
  await loaded;
  await new Promise(resolve => setTimeout(resolve, 500));
  const { result } = await send('Runtime.evaluate', {
    expression: `(() => {
      const hero = document.querySelector('.hero');
      const rect = selector => { const r = document.querySelector(selector).getBoundingClientRect(); return {top: Math.round(r.top), bottom: Math.round(r.bottom), left: Math.round(r.left), right: Math.round(r.right)} };
      return {
        innerWidth, innerHeight,
        scrollWidth: document.documentElement.scrollWidth,
        overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        hero: rect('.hero'), portrait: rect('.portrait-frame'), title: rect('#hero-title'), actions: rect('.hero-actions'),
        titleVisible: rect('#hero-title').bottom <= innerHeight,
        portraitVisible: rect('.portrait-frame').bottom <= innerHeight,
        actionsVisible: rect('.hero-actions').bottom <= innerHeight,
        mobileMenuButtonVisible: getComputedStyle(document.querySelector('#menu-toggle')).display !== 'none'
      };
    })()`,
    returnByValue: true
  });
  const screenshot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(new URL(`./${viewport.name}.png`, import.meta.url), Buffer.from(screenshot.data, 'base64'));
  results.push({ viewport: viewport.name, ...result.value });
}

console.log(JSON.stringify(results, null, 2));
socket.close();
