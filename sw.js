self.importScripts('./cache-polyfill.js');

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      try {
        return cache.addAll([
          '/',
          '/index.html',
          '/assets/favicon.ico',
          '/favicon.ico',
          '/manifest.json',
          '/assets/1.app.css',
          '/assets/app.css',
          '/assets/img/about-pic.webp',
          '/assets/img/about-pic.png',
          '/assets/img/car1.webp',
          '/assets/img/car1.jpeg',
          '/assets/img/bg.jpeg',
          '/assets/img/borispol.jpg',
          '/assets/src/fonts/iconfont/MaterialIcons-Regular.eot',
          '/assets/src/fonts/iconfont/MaterialIcons-Regular.ttf',
          '/assets/src/fonts/iconfont/MaterialIcons-Regular.woff',
          '/assets/src/fonts/iconfont/MaterialIcons-Regular.woff2',
          '/assets/src/fonts/iconfont/MaterialIcons-Regular.svg',
          '/assets/icons/android-chrome-192x192.png',
          '/assets/icons/android-chrome-512x512.png',
          '/assets/icons/apple-touch-icon.png',
          '/assets/icons/apple-touch-icon-60x60.png',
          '/assets/icons/apple-touch-icon-76x76.png',
          '/assets/icons/apple-touch-icon-120x120.png',
          '/assets/icons/apple-touch-icon-152x152.png',
          '/assets/icons/apple-touch-icon-180x180.png',
          '/assets/icons/favicon-16x16.png',
          '/assets/icons/favicon-32x32.png',
          '/assets/icons/msapplication-icon-144x144.png',
          '/assets/icons/mstile-150x150.png',
          '/js/app.js',
          '/js/1.chunk.js',
        ]);
      } catch (e) {
        console.error(e);
        return null;
      }
    }),
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request));
});
