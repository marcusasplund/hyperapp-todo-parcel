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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.9defcb26.png",
    "revision": "5a5b925d09d1f0a5ab55c273b43e9c0e"
  },
  {
    "url": "android-chrome-512x512.cc191728.png",
    "revision": "1c0d5f82c33566b0626f17ca4503d9d4"
  },
  {
    "url": "apple-touch-icon.9fa4e4f6.png",
    "revision": "fafc02c07fbd4c79c036863d207f0413"
  },
  {
    "url": "favicon-16x16.71b6712a.png",
    "revision": "59893e685ccea2c0a43ab3c175726dbf"
  },
  {
    "url": "favicon-32x32.9f57072f.png",
    "revision": "1bea9ca21fe49e7ff561fb54ea4549d3"
  },
  {
    "url": "index.html",
    "revision": "3fd9b04d326d8b75cb013fc3b96a79c1"
  },
  {
    "url": "src.a70744d1.js",
    "revision": "e551fe4b81b2052541f03018af2f33e2"
  },
  {
    "url": "src.c44c3823.css",
    "revision": "1c5f90dad690308297b66134751246ff"
  },
  {
    "url": "/",
    "revision": "e0e4983265a9e4e5a170bda2c0f43ae8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL(".//index.html"));
