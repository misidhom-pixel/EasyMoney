// Minimal service worker — required by Chrome on Android for the
// "Install app" prompt to work. It doesn't cache anything special;
// it just needs to exist and respond to fetches.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
