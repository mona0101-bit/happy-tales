const CACHE_NAME = "happy-tales-v3";
const CORE_ASSETS = [
  "index.html",
  "dashboard.html",
  "create.html",
  "library.html",
  "path-stories.html",
  "games.html",
  "quest.html",
  "safety.html",
  "login.html",
  "styles.css",
  "site.js",
  "dashboard.js",
  "assets/happy-tales-icon.svg",
  "assets/happy-tales-share.svg",
  "assets/moonlit-map.webp",
  "assets/starpath-world-map.webp"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("index.html")))
  );
});
