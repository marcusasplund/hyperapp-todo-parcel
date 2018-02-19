importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "hyperapp-todo-parcel.css",
    "revision": "2cc615ed3ad9c3f4e03465f8f59f0a9a"
  },
  {
    "url": "hyperapp-todo-parcel.js",
    "revision": "2a1fb6cecd1e3f0ad8e3240fa20f5874"
  },
  {
    "url": "index.html",
    "revision": "cc572a47cceb6109b8796bd78d6fcd01"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
