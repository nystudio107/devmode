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
        ampPrefix: 'amp_',
        ampCriticalHeight: 19200,
        ampCriticalWidth: 600,
        pages: [
            {
                url: '',
                template: 'index'
            },
            {
                url: '',
                template: 'amp_index'
            },
            {
                url: 'about',
                template: 'about/index'
            },
            {
                url: 'about',
                template: 'about/amp_index'
            },
            {
                url: 'calendar',
                template: 'calendar/index'
            },
            {
                url: 'calendar',
                template: 'calendar/amp_index'
            },
            {
                url: 'episodes',
                template: 'episodes/index'
            },
            {
                url: 'episodes',
                template: 'episodes/amp_index'
            },
            {
                url: 'episodes/webpack-inside-out-with-sean-larkin',
                template: 'episodes/_entry'
            },
            {
                url: 'episodes/webpack-inside-out-with-sean-larkin',
                template: 'episodes/_amp_entry'
            },
            {
                url: 'errors/offline',
                template: 'errors/offline'
            },
            {
                url: 'errors/error',
                template: 'errors/error'
            },
            {
                url: 'errors/503',
                template: 'errors/503'
            },
            {
                url: 'errors/404',
                template: 'errors/404'
            },
        ]
    },
};
