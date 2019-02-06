importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.09559d5b74c6dfa97323.js",
    "revision": "e2d0b8d4aed68bc0a7520049e4bc4567"
  },
  {
    "url": "/_nuxt/lang-en.2aa6593243d6ade0308d.js",
    "revision": "983cddfa0e2399e8f3a869a0ccdf0bf5"
  },
  {
    "url": "/_nuxt/lang-ja.bbb360416453c80f6bab.js",
    "revision": "5846a9675524a9789a57c8b9e189b91d"
  },
  {
    "url": "/_nuxt/layouts/default.01d602c2d1578121524c.js",
    "revision": "dc9b48bfd9afbf11c61a751288567f07"
  },
  {
    "url": "/_nuxt/manifest.43f0cc71b831c161b80e.js",
    "revision": "785602c0f9a3d5e327e63c9c26ea5157"
  },
  {
    "url": "/_nuxt/pages/contact/index.ef42ee7acee80431ac81.js",
    "revision": "ebe154f9aafb5d62a34d9d39a17d6264"
  },
  {
    "url": "/_nuxt/pages/corp/index.91c7443f2c76fe6aa3d9.js",
    "revision": "55f56e442881c189c2894fc264d57160"
  },
  {
    "url": "/_nuxt/pages/index.dd59ddc33ef2e82e2d61.js",
    "revision": "f25774c7f97afd3a1b159d1c809e6026"
  },
  {
    "url": "/_nuxt/pages/inquiry/cargo.753d317913d42730d3a5.js",
    "revision": "bbd035295dd91e85f6325dc5679e90a9"
  },
  {
    "url": "/_nuxt/pages/inquiry/customer.3d674c412f1e26919790.js",
    "revision": "655475fdc7b2debdda40929ca8574bce"
  },
  {
    "url": "/_nuxt/pages/inquiry/index.b18f07d3d38d0e816e96.js",
    "revision": "5f6efc1e66f82e7a548bf7c23d0572f2"
  },
  {
    "url": "/_nuxt/pages/inquiry/thanks.1eb95079b2ce41d640b0.js",
    "revision": "b772034d350321556d5a7e41f72cfc68"
  },
  {
    "url": "/_nuxt/pages/partner/index.a26c27d882b71113aee0.js",
    "revision": "feb231567ebaaf93390db1f154ea2e23"
  },
  {
    "url": "/_nuxt/vendor.e6bb530d95c5fb857af8.js",
    "revision": "51a20f7d5b9fa3ba44f54ffa2afca767"
  }
], {
  "cacheId": "shippio-site",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





