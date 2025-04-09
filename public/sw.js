// caches video requests

const CACHE_NAME = 'video-cache-v1';

self.addEventListener('install', (event) => {
  // Force the waiting service worker to become the active service worker.
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  // Adjust the condition to suit your video path or file types
  if (event.request.url.endsWith('.mp4') || event.request.url.endsWith('.webm')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          // Open the cache and store the fetched video.
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});