if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),o={module:{uri:c},exports:i,require:r};s[c]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/7e3JV7UT_4gU-t0-2A2A-/_buildManifest.js",revision:"c36f2fe3e0786c2904ea30de64bccc91"},{url:"/_next/static/7e3JV7UT_4gU-t0-2A2A-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/120-db078a6dbd69b579.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/183.ff81d7ab192a64bc.js",revision:"ff81d7ab192a64bc"},{url:"/_next/static/chunks/235-abc0afd0a14f93cd.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/282-59a549c5219bc936.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/304-e9ba7f776f7dd7c8.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/307.d1714103cea78122.js",revision:"d1714103cea78122"},{url:"/_next/static/chunks/399-e8d7c5c958c6cfb6.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/459-0f762a1b0ddd4d22.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/529.3aa8a707fa46c5fe.js",revision:"3aa8a707fa46c5fe"},{url:"/_next/static/chunks/650-efab3dcecf885261.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/700.576bb47f9f35c156.js",revision:"576bb47f9f35c156"},{url:"/_next/static/chunks/718-983b7de939102c72.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/796-9436e41d772edad0.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/859.abd9b4dd2354bc44.js",revision:"abd9b4dd2354bc44"},{url:"/_next/static/chunks/879-269cacafb2871a55.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/create/proposal/loading-f042831737ba8c48.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/create/proposal/page-1eff85385a8b260a.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-a2336682716c2751.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/loading-4d53b0930a700c61.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/onboarding/loading-d56893e9f61fda55.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/onboarding/page-005f7b98548355b5.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-65524c926f39b4a9.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/profile/loading-676d3ee25c942478.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/profile/page-ac98ac4b7a0687ba.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/proposals/%5Bslug%5D/loading-74dd8cd0aefd560b.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/proposals/%5Bslug%5D/page-e818658644fd2075.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/proposals/loading-f4459b8b089200d2.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/%5Blocale%5D/proposals/page-64d7f2c3139df1e2.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/app/_not-found-08e08d3d94618dc5.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/c2a6b034-01e59a8501ad248c.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/e9fb37e5-9724dcd6e152109b.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/framework-640591aea5fbc4aa.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/main-app-75d391de1e5bde24.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/main-b6181f5468484f9b.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/pages/_app-0a40b2ec098babd8.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/pages/_error-02fa9f8020e36857.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-89bf067c2c28e691.js",revision:"7e3JV7UT_4gU-t0-2A2A-"},{url:"/_next/static/css/4ab432c3b660efb0.css",revision:"4ab432c3b660efb0"},{url:"/_next/static/css/94d3f5b5254060d5.css",revision:"94d3f5b5254060d5"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/browserconfig.xml",revision:"d2c3ec839559c9b7c7638c378d45bca5"},{url:"/icons/android-chrome-192x192.png",revision:"e79bb376fbab14e0520c6d3efbef3227"},{url:"/icons/android-chrome-512x512.png",revision:"6b665b7d298bf04e06ef228e78bbbd40"},{url:"/icons/avatar.png",revision:"8e2c4d70b3986fbffefa4a6c4fbfe7ee"},{url:"/icons/mstile-150x150.png",revision:"a0744bd06da99f49893c4c3b6e934fcc"},{url:"/manifest.json",revision:"1b269be90f39c6ace24355ac6bb9cc29"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
