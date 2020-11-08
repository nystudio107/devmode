// copy.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    copy: [
        {
            from: "../src/js/test.js",
            to: "js/[name].[ext]"
        }
    ],
};
