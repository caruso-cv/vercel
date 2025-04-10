if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let d={};const n=e=>s(e,t),c={module:{uri:t},exports:d,require:n};i[t]=Promise.all(r.map((e=>c[e]||n(e)))).then((e=>(o(...e),d)))}}define(["./workbox-71d0c0b2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"vids/hero.webm",revision:"6a566f17f7405d9910d54947145eb21e"},{url:"vids/output.webm",revision:"51399d04ee24490b1c0af4315aa2d404"},{url:"vids/storage.mp4",revision:"46ca05eb3381a555da8d1b49cca09c98"},{url:"vids/storage.webm",revision:"669791d97ddb5d6c013a57382325f9c8"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.registerRoute(/\/videos\/.*\.(mp4|webm)$/,new e.CacheFirst({cacheName:"my-video-cache",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map

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
