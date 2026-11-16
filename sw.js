const NOMBRE_CACHE = "aprende-v13";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./style.css",
  "./lessons.js",
  "./py-1.js",
  "./py-2.js",
  "./py-3.js",
  "./py-4.js",
  "./py-5.js",
  "./py-6.js",
  "./py-7.js",
  "./py-8.js",
  "./py-9.js",
  "./py-10.js",
  "./py-11.js",
  "./java-1.js",
  "./java-2.js",
  "./java-3.js",
  "./sql-1.js",
  "./sql-2.js",
  "./sql-3.js",
  "./sql-4.js",
  "./sql-5.js",
  "./sql-6.js",
  "./sql-7.js",
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