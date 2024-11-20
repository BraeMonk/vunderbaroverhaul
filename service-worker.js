const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
	'/bananacat.html',
	'/findout.html',
	'/khajiitonly.html',
	'/muchlove.html',
	'/nonothing.html',
	'/NOPE.html',
	'/page1.html',
	'/products.html',
	'/welcome.html',
	'/youdied.html',
  '/styles.css',
  '/script.js',
	'/index2pages/index2.html',
	'/index2pages/friend.html',
	'/index2pages/hell.html',
	'/index2pages/thefaceofgod.html',
	'/index2pages/styles2.css',
	'/index3pages/index3.html',
	'/index3pages/styles3.css',
  '/images/B254B0F1-D673-4741-8DA6-F9D4C8593794.png',
'/images',
'/audio',
'/index2pages/images2'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).then(function(networkResponse) {
        if (event.request.url.endsWith('.png') || event.request.url.endsWith('.jpg') || event.request.url.endsWith('.jpeg')) {
          return caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request.url, networkResponse.clone());
            return networkResponse;
          });
        } else {
          return networkResponse;
        }
      });
    })
  );
});

