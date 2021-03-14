// app.settings.js

// node modules
require('dotenv').config();
const path = require('path');

// settings
module.exports = {
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('../src'),
    },
    copyright: 'nystudio107.com',
    entry: {
        'app': [
            '@/js/app.ts',
            '@/css/app.pcss',
            '@/fonts/fontello.eot',
            '@/fonts/fontello.ttf',
            '@/fonts/fontello.woff',
            '@/fonts/fontello.woff2',
            '@/fonts/OperatorMonoSSm-Book.eot',
            '@/fonts/OperatorMonoSSm-Book.ttf',
            '@/fonts/OperatorMonoSSm-Book.woff',
            '@/fonts/OperatorMonoSSm-Book.woff2',
            '@/fonts/OperatorMonoSSm-BookItalic.eot',
            '@/fonts/OperatorMonoSSm-BookItalic.ttf',
            '@/fonts/OperatorMonoSSm-BookItalic.woff',
            '@/fonts/OperatorMonoSSm-BookItalic.woff2',
        ],
        'lazysizes-wrapper': '@/js/utils/lazysizes-wrapper.ts',
        'episodes': '@/js/modules/episodes.js',
        'player': '@/js/modules/player.js',
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
    name: 'devmode-fm',
    paths: {
        dist: path.resolve('../cms/web/dist/'),
    },
    urls: {
        criticalCss: 'https://devMode.fm/',
        publicPath: () => process.env.PUBLIC_PATH || '/dist/',
    },
};
