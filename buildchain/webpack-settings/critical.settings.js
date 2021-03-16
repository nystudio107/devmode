// critical.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    critical: {
        base: '../cms/web/dist/criticalcss/',
        suffix: '_critical.min.css',
        criticalHeight: 1200,
        criticalWidth: 1200,
        pages: [
            {
                uri: '',
                template: 'index'
            },
            {
                uri: 'about',
                template: 'about/index'
            },
            {
                uri: 'calendar',
                template: 'calendar/index'
            },
            {
                uri: 'episodes',
                template: 'episodes/index'
            },
            {
                uri: 'episodes/webpack-inside-out-with-sean-larkin',
                template: 'episodes/_entry'
            },
            {
                uri: 'errors/offline',
                template: 'errors/offline'
            },
            {
                uri: 'errors/error',
                template: 'errors/error'
            },
            {
                uri: 'errors/503',
                template: 'errors/503'
            },
            {
                uri: 'errors/404',
                template: 'errors/404'
            },
        ]
    },
};
