'use strict';

// Update cache names any time any of the cached files change.
const cacheName = 'catancardcounter-v3';
var filesToCache = [
  //'/',
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

function cache(request, response) {
  if (response.type === "error" || response.type === "opaque") {
    return Promise.resolve(); // do not put in cache network errors
  }

  return caches
    .open(cacheName)
    .then(cache => cache.put(request, response.clone()));
}

self.addEventListener("fetch", e => {
  console.log("[SW] fetch " + e.request.url);

  // Cache-First Strategy
  e.respondWith(
    caches
      .match(e.request) // check if the request has already been cached
      .then(cached => cached || fetch(e.request)) // otherwise request network
      .then(
        response =>
          cache(e.request, response) // put response in cache
            .then(() => response) // resolve promise with the network response
      )
  );
});
