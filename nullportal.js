var ejs      = require('ejs');

var basePath = process.cwd() + '/nullportal-web/views/';
var index    = {};

var nullportal = {

    setup: function () {

        console.log('[nullportal.js]:\tSetup Complete');
    },
    getPage: function (req, callback) {

        ejs.renderFile(basePath + 'index.ejs', function (error, data) {
            if (error) throw new Error("Error rendering EJS file: " + error);

            callback(data);

        });
    }
};

module.exports = nullportal;
