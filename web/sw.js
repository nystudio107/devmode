/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/dist/js/workbox-catch-handler.js",
  "/dist/js/precache-manifest.d3829dd61c409ca3cb8879f11ea06f39.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\/admin.*$/, workbox.strategies.networkOnly(), 'GET');
workbox.routing.registerRoute(/\.mp3$/, workbox.strategies.networkOnly(), 'GET');
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|webp)$/, workbox.strategies.cacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"purgeOnQuotaError":false})] }), 'GET');

workbox.googleAnalytics.initialize({});
