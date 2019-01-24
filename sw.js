importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.09559d5b74c6dfa97323.js",
    "revision": "e2d0b8d4aed68bc0a7520049e4bc4567"
  },
  {
    "url": "/_nuxt/lang-en.0754f3399e678e78d68d.js",
    "revision": "7bd6b30646f80596a4f4bc9ad3f289dc"
  },
  {
    "url": "/_nuxt/lang-ja.a8c929068f24804b7171.js",
    "revision": "af03dfe5ec44c54438556fd5492c01ef"
  },
  {
    "url": "/_nuxt/layouts/default.01d602c2d1578121524c.js",
    "revision": "dc9b48bfd9afbf11c61a751288567f07"
  },
  {
    "url": "/_nuxt/manifest.05e248e8bec3c3d4be1b.js",
    "revision": "0b5f2a4fbc4e75158b74bd0ecf1e34e9"
  },
  {
    "url": "/_nuxt/pages/contact/index.fe9137348db5ed23e3da.js",
    "revision": "8a2067d07a39708db244926940fe8e06"
  },
  {
    "url": "/_nuxt/pages/corp/index.447b6f99f24556c3ecbf.js",
    "revision": "df896ce8a6cc5bb6c0c19aaf19d816e2"
  },
  {
    "url": "/_nuxt/pages/index.d0cc62f2d52330dbbf61.js",
    "revision": "7d483e20dcdd8989e03eb619ac29d5f2"
  },
  {
    "url": "/_nuxt/pages/inquiry/cargo.0573135fd44d9586e790.js",
    "revision": "453cfbcdf0649fcff7151f7d57fa6388"
  },
  {
    "url": "/_nuxt/pages/inquiry/customer.d7d28a4f64a5f9f97e3e.js",
    "revision": "72d66509d73489ae94474e8872f375f1"
  },
  {
    "url": "/_nuxt/pages/inquiry/index.f87b3effe04cf61c1345.js",
    "revision": "eae201f82d23e7318119fadbb6f0b003"
  },
  {
    "url": "/_nuxt/pages/inquiry/thanks.2e3463a021fcaa0be6b9.js",
    "revision": "b0ee9412606536b678d57c334f629e4a"
  },
  {
    "url": "/_nuxt/pages/partner/index.140e9314b14f81f81208.js",
    "revision": "4efccf58a9b97e8549c2cd909eca0931"
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





