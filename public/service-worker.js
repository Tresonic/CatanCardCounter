'use strict';

// Update cache names any time any of the cached files change.
const cacheName = 'catancardcounter-v1';
var filesToCache = [
  '/index.html',
  '/global.css',
  '/build/bundle.js',
  '/images/brick.jpeg',
  '/images/lumber.jpeg',
  '/images/ore.jpeg',
  '/images/sheep.jpeg',
  '/images/wheat.jpeg',
];

self.addEventListener("install", e => {
  console.log("[SW] install");
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", e => {
  console.log("[SW] fetch " + e.request.url);

  e.respondWith(
    (async function () {
      const response = await caches.match(e.request);
      return response || fetch(e.request);
    })()
  );
});
