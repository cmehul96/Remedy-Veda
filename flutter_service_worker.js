'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "df84b8943a2a838941451ed2ac0c373d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "5e7f2d2fb6c2eb0ae0471caa97497263",
"assets/assets/ingredients/basil_leaves.png": "db481dbf4afd509a081f326ff2ca9806",
"assets/assets/ingredients/neem_leaves.png": "11b4a56b3adec4d4e3394b91c5451412",
"assets/assets/ingredients/banana.png": "014725c9f5cbaca0fc1dacaf9c4f2af6",
"assets/assets/ingredients/coriander_seeds.png": "050e582b7bdc947c605e27c578f9c40d",
"assets/assets/ingredients/carrot.png": "5686926bcb8594f8c50512b8c4d025e1",
"assets/assets/ingredients/warm_milk.png": "1c01ab5c067eaf8698849e737d57f7d3",
"assets/assets/ingredients/walnuts.png": "8be15dff04b7db0a10ca2c9ed65904c9",
"assets/assets/ingredients/dates.png": "4e3c64b26c8694375e14f27a67372833",
"assets/assets/ingredients/carrier_oil.png": "a0e06cc6c72a90e469604a9ce48bb4cd",
"assets/assets/ingredients/black_pepper.png": "1f0778d2ebc279366107cf22af2cc88b",
"assets/assets/ingredients/coconut_oil.png": "fee4c164a0cb257f3c2264450691801a",
"assets/assets/ingredients/coconut_water.png": "caac4359e4efbe4bee1c5bdb4bb0dda9",
"assets/assets/ingredients/triphala_powder.png": "7ed0cbf57feeda3e895c296436339717",
"assets/assets/ingredients/mustard_oil.png": "3c4ca487659c4e2b08c3c219c36a6f95",
"assets/assets/ingredients/lavender_oil.png": "38284f9bff99731db3a02fab580f6c0d",
"assets/assets/ingredients/grated_ginger.png": "5590a4af1b80ad2bc436727f7ea3a078",
"assets/assets/ingredients/ghee.png": "f807eeeebdc40f251a11c35e2ab07227",
"assets/assets/ingredients/oats.png": "5ab8cc8af524394b202f93de25ac515c",
"assets/assets/ingredients/sandalwood_powder.png": "c6ee5d1015da6c8cb9800152b8269b41",
"assets/assets/ingredients/giloy_juice.png": "784d9c7d527eb28f405b801207a0db81",
"assets/assets/ingredients/spinach.png": "18aee7ec25161850ba19ccb56f7a2a33",
"assets/assets/ingredients/jeera_cumin_seeds.png": "975931c2911122fa1eee0bedd1644a8f",
"assets/assets/ingredients/almonds.png": "c9994196a157ca41a8d2e5520acf5722",
"assets/assets/ingredients/papaya.png": "7f90631440e33a45833929081cb66823",
"assets/assets/ingredients/nutmeg_powder.png": "4ec49dd472dbb2e212fe432d9d0f69a8",
"assets/assets/ingredients/cumin_seeds.png": "975931c2911122fa1eee0bedd1644a8f",
"assets/assets/ingredients/neem_tulsi_leaves.png": "11b4a56b3adec4d4e3394b91c5451412",
"assets/assets/ingredients/flaxseeds.png": "ccb15abc98daaa1916225c5f43eaad8a",
"assets/assets/ingredients/warm_water.png": "bc76ba0cacf7fca6265b0846c0a91b5b",
"assets/assets/ingredients/peppermint_oil.png": "a7bc8c200a44f24ad18407569cdf9983",
"assets/assets/ingredients/cloves.png": "940afa9da26ce46e0bdb1da54a24f15f",
"assets/assets/ingredients/epsom_salt.png": "e11f9fc79e8661c05dca6d72700c8c64",
"assets/assets/ingredients/lemon_juice.png": "a06b762483129c7c3a9b8b3d7bf59e27",
"assets/assets/ingredients/fenugreek_seeds.png": "718b14470dd0b286a6fb75accc29991b",
"assets/assets/ingredients/rose_water_eye_drops.png": "8a907026f29ffdaffe9960bba1930e18",
"assets/assets/ingredients/eucalyptus_oil.png": "27b614f858af14019a07b6b213b74485",
"assets/assets/ingredients/turmeric_powder.png": "3e32b7e8e9e41a8638945a60df3bc606",
"assets/assets/ingredients/rose_water.png": "8a907026f29ffdaffe9960bba1930e18",
"assets/assets/ingredients/ajwain_seeds.png": "dae8bb132a3dccf3767d537913270877",
"assets/assets/ingredients/yogurt.png": "7a40c549de1083ff2f8f72c8bb28d56f",
"assets/assets/ingredients/multani_mitti.png": "4a3c092c974e68a07d5758293e831b6b",
"assets/assets/ingredients/cinnamon_powder.png": "d1a94f75f36198cbea88c27227648012",
"assets/assets/ingredients/water.png": "bd7da2fe6f8adf5920dfce95bf29a5b8",
"assets/assets/ingredients/jaggery.png": "70cd104a85c89f3a127448e256c6f309",
"assets/assets/ingredients/honey.png": "40e1647024f0c45719505d5c00a23f07",
"assets/assets/ingredients/shatavari_powder.png": "e302838d874d74a452607ba8d2eb3815",
"assets/assets/ingredients/fresh_aloe_vera_gel.png": "6fb3951d1f432f55402a78469de43ce3",
"assets/assets/ingredients/apple_cider_vinegar.png": "3e321369e2073022d24bfb378f38db5e",
"assets/assets/ingredients/aloe_vera_gel.png": "6fb3951d1f432f55402a78469de43ce3",
"assets/assets/ingredients/curry_leaves.png": "6f0efc75f92b3d451f0a0ffde06cbe7e",
"assets/assets/ingredients/sesame_oil.png": "5765065872f83ef43631a93b13fb9d7d",
"assets/assets/ingredients/cardamom_pods.png": "3122aea798148c739b40c522cf9ff9e8",
"assets/assets/ingredients/ginger_juice.png": "d5d1624efbda0da22f13964d4d2f82a3",
"assets/assets/ingredients/ashwagandha_powder.png": "39aa1a723369c755ef8ecc11cdd29dd2",
"assets/assets/ingredients/methi_fenugreek_powder.png": "b0bc903108ceddce460f62e9696138d0",
"assets/assets/ingredients/chamomile_flowers.png": "cfe1ac80aca0e106c6658fb6fdd46e9f",
"assets/assets/ingredients/jatamansi_powder.png": "e952473b8e81f2dac6cbf5c3f777587e",
"assets/assets/ingredients/saffron.png": "a6bf50111d2e98ccf52b73cd9a90cff8",
"assets/assets/ingredients/castor_oil.png": "04600fded8e9cdde77390530a1127da0",
"assets/assets/ingredients/onion_juice.png": "7d21aaec3504fcc3b1a2a7f30516b963",
"assets/assets/ingredients/pomegranate_seeds.png": "ece46d5b5326447554efd6fd3643ee52",
"assets/assets/ingredients/amla_powder.png": "f6e2697cb670410cef528275f9272da8",
"assets/assets/ingredients/fennel_seeds.png": "ffa0bc983d931757cd117d1545767727",
"assets/assets/ingredients/spearmint_leaves.png": "962196bcc263297911daca91c4c2c830",
"assets/assets/ingredients/hot_water.png": "bc76ba0cacf7fca6265b0846c0a91b5b",
"assets/assets/ingredients/figs.png": "9e650091b885acf14b74a512368026f8",
"assets/assets/ingredients/brahmi_powder.png": "e0158bb14637353baae77b781038828c",
"assets/assets/ingredients/garlic.png": "bed7ff0e41638de75304eabab445b8c4",
"assets/assets/ingredients/peppermint_leaves.png": "b30a8b7fffda0c0be3aac51b8eb0419d",
"assets/assets/ingredients/chyawanprash.png": "3610a8f09f13ac733afa53c80c4d0fdb",
"assets/assets/ingredients/tulsi_leaves.png": "db481dbf4afd509a081f326ff2ca9806",
"assets/assets/ingredients/clove_oil.png": "252d6a43d62680060c35233e104d5191",
"assets/assets/ingredients/aloe_vera_juice.png": "ed6387b22d27b294b595fd6187898d9b",
"assets/assets/logo.png": "d5186955248e79bdd0517de1124cbd91",
"assets/AssetManifest.json": "b216ad77e3851d295c08455b1fdb1b5b",
"assets/NOTICES": "b83970d5e1f831cb122eabd5fa53dfa9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "69ecd28e737bd10af1fd64d2b6b1f6b4",
"assets/AssetManifest.bin": "237303e2bab92e14237944377982bcc9",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "56128fc6ec7568b99d6fc24cfa34a218",
"flutter_bootstrap.js": "b4927068b24fe6166c6e5854a7126717",
"index.html": "461ea0ba76df527babd16c414d0d441e",
"/": "461ea0ba76df527babd16c414d0d441e",
"version.json": "389a6e6e6f34312743ca5f36467c84b5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.wasm": "c528f7ba97a317e25e547ea47c8a66d8",
"canvaskit/canvaskit.wasm": "2e9895626fe95683569ed951214f1eb8",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/chromium/canvaskit.wasm": "86233631b867ce8f74c2020077650d11",
"canvaskit/chromium/canvaskit.js": "73343b0c5d471d1114d7f02e06c1fdb2",
"canvaskit/chromium/canvaskit.js.symbols": "85275e659470daa080e014ffe17a1a59",
"canvaskit/skwasm_st.js.symbols": "a564f5dfbd90292f0f45611470170fe1",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js": "de27f912e40a372c22a069c1c7244d9b",
"canvaskit/skwasm.js.symbols": "c7cf698f802bc5e9e8e791f762ebdfe9",
"canvaskit/canvaskit.js.symbols": "ff204c6b77c9e5969d85d9bfbaa0c843",
"canvaskit/skwasm_st.wasm": "3179a61ea4768a679dbbe30750d75214"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
