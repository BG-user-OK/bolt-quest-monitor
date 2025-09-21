self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("bolt-quest-cache").then(cache => {
      return cache.addAll([
        "./",
        "./Bolt-quest.html",
        "./manifest.webmanifest"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
