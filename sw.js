const NOMBRE_CACHE = "aprende-v16";

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
  "./java-4.js",
  "./java-5.js",
  "./java-6.js",
  "./java-7.js",
  "./java-8.js",
  "./sql-1.js",
  "./sql-2.js",
  "./sql-3.js",
  "./sql-4.js",
  "./sql-5.js",
  "./sql-6.js",
  "./sql-7.js",
  "./det-1.js",
  "./det-2.js",
  "./det-3.js",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function (evento) {
  self.skipWaiting();
  evento.waitUntil(
    caches.open(NOMBRE_CACHE).then(function (cache) {
      return cache.addAll(
        ARCHIVOS.map(function (archivo) {
          return new Request(archivo, { cache: "reload" });
        })
      );
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
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (evento) {
  if (evento.request.method !== "GET") {
    return;
  }
  evento.respondWith(
    fetch(evento.request, { cache: "no-cache" })
      .then(function (respuesta) {
        if (respuesta.ok) {
          const copia = respuesta.clone();
          caches.open(NOMBRE_CACHE).then(function (cache) {
            cache.put(evento.request, copia);
          });
        }
        return respuesta;
      })
      .catch(function () {
        return caches.match(evento.request);
      })
  );
});