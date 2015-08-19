/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');

var LivingStyleGuide = require('broccoli-livingstyleguide');
var lsg = LivingStyleGuide(['app'], 'styles/styleguide.lsg', 'assets/styleguide.html');

module.exports = function (defaults) {
    var app = new EmberApp(defaults, {
        sassOptions: {
            includePaths: [
                'app'
            ]
        }
    });

    return mergeTrees([app.toTree(), lsg]);
};
