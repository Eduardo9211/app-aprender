const NOMBRE_CACHE = "aprende-v7";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./style.css",
  "./lessons.js",
  "./py-1.js",
  "./py-2.js",
  "./py-3.js",
  "./py-4.js",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function (evento) {
  evento.waitUntil(
    caches.open(NOMBRE_CACHE).then(function (cache) {
      return cache.addAll(ARCHIVOS);
    })
  );
});

self.addEventListener("activate", function (evento) {
  evento.waitUntil(
    caches.keys().then(function (nombres) {
      return Promise.all(
        nombres
          .filter(function (n) { return n !== NOMBRE_CACHE; })
          .map(function (n) { return caches.delete(n); })
      );
    })
  );
});

self.addEventListener("fetch", function (evento) {
  evento.respondWith(
    caches.match(evento.request).then(function (guardado) {
      return guardado || fetch(evento.request);
    })
  );
});