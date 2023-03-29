/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-71a84e8e'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/AboutView.10fb32bf.js",
    "revision": null
  }, {
    "url": "assets/AboutView.28ecb9c4.js",
    "revision": null
  }, {
    "url": "assets/AboutView.3a65497d.js",
    "revision": null
  }, {
    "url": "assets/AboutView.3de3b60a.js",
    "revision": null
  }, {
    "url": "assets/AboutView.4a20b125.js",
    "revision": null
  }, {
    "url": "assets/AboutView.4e0d89c9.js",
    "revision": null
  }, {
    "url": "assets/AboutView.58cb402c.js",
    "revision": null
  }, {
    "url": "assets/AboutView.73ffbf37.js",
    "revision": null
  }, {
    "url": "assets/AboutView.817e9f0a.js",
    "revision": null
  }, {
    "url": "assets/AboutView.899a4113.js",
    "revision": null
  }, {
    "url": "assets/AboutView.8f72c068.js",
    "revision": null
  }, {
    "url": "assets/AboutView.c3d0eec1.js",
    "revision": null
  }, {
    "url": "assets/AboutView.c4ab2a33.js",
    "revision": null
  }, {
    "url": "assets/AboutView.d6a8cf88.js",
    "revision": null
  }, {
    "url": "assets/AboutView.fae1075d.js",
    "revision": null
  }, {
    "url": "assets/index.0db4e1ea.js",
    "revision": null
  }, {
    "url": "assets/index.24bfd10d.js",
    "revision": null
  }, {
    "url": "assets/index.2b903783.js",
    "revision": null
  }, {
    "url": "assets/index.3adebe1b.js",
    "revision": null
  }, {
    "url": "assets/index.4c0dbb8f.js",
    "revision": null
  }, {
    "url": "assets/index.938bd640.js",
    "revision": null
  }, {
    "url": "assets/index.9d271a22.js",
    "revision": null
  }, {
    "url": "assets/index.a361a1c0.js",
    "revision": null
  }, {
    "url": "assets/index.a377e75b.js",
    "revision": null
  }, {
    "url": "assets/index.a4726517.css",
    "revision": null
  }, {
    "url": "assets/index.bc4a7ef7.js",
    "revision": null
  }, {
    "url": "assets/index.c43f09fc.js",
    "revision": null
  }, {
    "url": "assets/index.d378123e.js",
    "revision": null
  }, {
    "url": "assets/index.d3802e26.js",
    "revision": null
  }, {
    "url": "assets/index.f97c1135.js",
    "revision": null
  }, {
    "url": "assets/index.fde7ef84.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "34b0c7497252e405e372be8515b5f04a"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "icons/zeit-ist-geld.png",
    "revision": "d313571e7093696e0bf336563087b3e4"
  }, {
    "url": "favicon.ico",
    "revision": "1ba2ae710d927f13d483fd5d1e548c9b"
  }, {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f394b653bd1b06b64251eb1376446ecc"
  }, {
    "url": "icons/android-chrome-512x512.png",
    "revision": "6801d5f95de8ee071622a1cc3f094ab0"
  }, {
    "url": "icons/apple-touch-icon.png",
    "revision": "0bda84e78a6b7cb761255a541f26960f"
  }, {
    "url": "icons/favicon-16x16.png",
    "revision": "7796b97904ebfa178299d20b4058ca4d"
  }, {
    "url": "icons/favicon-32x32.png",
    "revision": "683511575ce46e98dc59f560fc9242f0"
  }, {
    "url": "icons/favicon.ico",
    "revision": "3dcf9658597c9348af60cc930424fa9d"
  }, {
    "url": "icons/mstile-150x150.png",
    "revision": "04e74696ea42464d9a93bd586a8579a9"
  }, {
    "url": "icons/favicon_package_v0.16 (1)/android-chrome-192x192.png",
    "revision": "f394b653bd1b06b64251eb1376446ecc"
  }, {
    "url": "icons/favicon_package_v0.16 (1)/android-chrome-512x512.png",
    "revision": "6801d5f95de8ee071622a1cc3f094ab0"
  }, {
    "url": "icons/favicon_package_v0.16 (1)/apple-touch-icon.png",
    "revision": "0bda84e78a6b7cb761255a541f26960f"
  }, {
    "url": "icons/favicon_package_v0.16 (1)/favicon-16x16.png",
    "revision": "7796b97904ebfa178299d20b4058ca4d"
  }, {
    "url": "icons/favicon_package_v0.16 (1)/favicon-32x32.png",
    "revision": "683511575ce46e98dc59f560fc9242f0"
  }, {
    "url": "icons/favicon_package_v0.16 (1)/favicon.ico",
    "revision": "3dcf9658597c9348af60cc930424fa9d"
  }, {
    "url": "icons/favicon_package_v0.16 (1)/mstile-150x150.png",
    "revision": "04e74696ea42464d9a93bd586a8579a9"
  }, {
    "url": "manifest.webmanifest",
    "revision": "2d4c36e506e54e250364d2ef80628fa5"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute("/getHours", new workbox.NetworkFirst({
    "cacheName": "hours",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 86400
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
