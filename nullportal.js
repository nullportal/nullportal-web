var express = require('express');
var app     = express();
var fs      = require('fs');

var basePath= process.cwd() + '/nullportal-web/views/';
var index   = {};

var nullportal = {

    setup: function () {
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        app.use(express.static(__dirname + '/views'));

        fs.readFile(basePath + 'index.ejs', 'utf8', function (error, data) {
            index = (! error) ? data : '404';
        });

        console.log('[nullportal]:\tSetup Complete');
    },
    hello: function (req, callback) {

        /*XXX*/console.log('[nullportal]:\t%j', req.headers);

        callback(index);

    }
};

module.exports = nullportal;
