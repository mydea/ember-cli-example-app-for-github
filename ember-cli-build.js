/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function (defaults) {
    var app = new EmberApp(defaults, {
        sassOptions: {
            includePaths: [
                'app'
            ]
        }
    });

    return mergeTrees([app.toTree()]);
};
