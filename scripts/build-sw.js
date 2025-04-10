const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Run Workbox to generate service worker
execSync('npx workbox generateSW', { stdio: 'inherit' });

// Path to the generated service worker in public
const swPath = path.join(__dirname, '../public/sw.js');

// Your custom video caching code
const videoCacheCode = `
// --- Custom video caching fallback ---
self.addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('.mp4') || event.request.url.endsWith('.webm')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          return caches.open('video-cache-v1').then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});
`;

fs.appendFileSync(swPath, videoCacheCode);
console.log('✅ Service worker generated and custom logic appended.');