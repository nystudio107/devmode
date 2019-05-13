// webpack.settings.js - webpack settings config

// node modules
require('dotenv').config();

// Webpack settings exports
// noinspection WebpackConfigHighlighting
module.exports = {
    name: "Example Project",
    copyright: "Example Company, Inc.",
    paths: {
        src: {
            base: "./src/",
            css: "./src/css/",
            js: "./src/js/"
        },
        dist: {
            base: "./web/dist/",
            clean: [
                "./img",
                "./criticalcss",
                "./css",
                "./js"
            ]
        },
        templates: "./templates/"
    },
    urls: {
        live: "https://devMode.fm/",
        local: "http://devMode.test/",
        critical: "https://devMode.fm/",
        publicPath: () => process.env.PUBLIC_PATH || "/dist/",
    },
    vars: {
        cssName: "styles"
    },
    entries: {
        "app": "app.js",
        "episodes": "modules/episodes.js",
        "player": "modules/player.js"
    },
    babelLoaderConfig: {
        exclude: [
        ],
    },
    copyWebpackConfig: [
        {
            from: "./src/js/workbox-catch-handler.js",
            to: "js/[name].[ext]"
        }
    ],
    criticalCssConfig: {
        base: "./web/dist/criticalcss/",
        suffix: "_critical.min.css",
        criticalHeight: 1200,
        criticalWidth: 1200,
        ampPrefix: "amp_",
        ampCriticalHeight: 19200,
        ampCriticalWidth: 600,
        pages: [
                {
                    url: "",
                    template: "index"
                },
                {
                    url: "",
                    template: "amp_index"
                },
                {
                    url: "about",
                    template: "about/index"
                },
                {
                    url: "about",
                    template: "about/amp_index"
                },
                {
                    url: "calendar",
                    template: "calendar/index"
                },
                {
                    url: "calendar",
                    template: "calendar/amp_index"
                },
                {
                    url: "episodes/talking-craft-cms-rc1",
                    template: "episodes/_entry"
                },
                {
                    url: "episodes/talking-craft-cms-rc1",
                    template: "episodes/_amp_entry"
                },
                {
                    url: "offline",
                    template: "offline"
                },
                {
                    url: "error",
                    template: "error"
                },
                {
                    url: "503",
                    template: "503"
                },
                {
                    url: "404",
                    template: "404"
                }
            ]
    },
    devServerConfig: {
        public: () => process.env.DEVSERVER_PUBLIC || "http://localhost:8080",
        host: () => process.env.DEVSERVER_HOST || "localhost",
        poll: () => process.env.DEVSERVER_POLL || false,
        port: () => process.env.DEVSERVER_PORT || 8080,
        https: () => process.env.DEVSERVER_HTTPS || false,
    },
    manifestConfig: {
        basePath: ""
    },
    purgeCssConfig: {
        paths: [
            "./templates/**/*.{twig,html}",
            "./src/vue/**/*.{vue,html}",
            "./node_modules/vuetable-2/src/components/**/*.{vue,html}",
        ],
        whitelist: [
            "./src/css/components/**/*.{css}"
        ],
        whitelistPatterns: [],
        extensions: [
            "html",
            "js",
            "twig",
            "vue"
        ]
    },
    saveRemoteFileConfig: [
        {
            url: "https://www.google-analytics.com/analytics.js",
            filepath: "js/analytics.js"
        }
    ],
    createSymlinkConfig: [
        {
            origin: "img/favicons/favicon.ico",
            symlink: "../favicon.ico"
        }
    ],
    webappConfig: {
        logo: "./src/img/favicon-src.png",
        prefix: "img/favicons/"
    },
    workboxConfig: {
        swDest: "../sw.js",
        precacheManifestFilename: "js/precache-manifest.[manifestHash].js",
        importScripts: [
            "/dist/workbox-catch-handler.js"
        ],
        exclude: [
            /\.(png|jpe?g|gif|svg|webp)$/i,
            /\.map$/,
            /^manifest.*\\.js(?:on)?$/,
        ],
        globDirectory: "./web/",
        globPatterns: [
            "offline.html",
            "offline.svg"
        ],
        offlineGoogleAnalytics: true,
        runtimeCaching: [
            {
                urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
                handler: "cacheFirst",
                options: {
                    cacheName: "images",
                    expiration: {
                        maxEntries: 20
                    }
                }
            }
        ]
    }
};
