// per: https://developers.google.com/web/tools/workbox/guides/advanced-recipes
workbox.routing.registerRoute(
    /\.(?:mp3)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'audio',
        expiration: {
            maxEntries: 5
        },
        plugins: [
            new workbox.cacheableResponse.Plugin({statuses: [200]}),
            new workbox.rangeRequests.Plugin(),
        ],
    }),
);
