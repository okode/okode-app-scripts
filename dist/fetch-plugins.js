"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var FetchPlugins;
(function (FetchPlugins) {
    function init() {
        var fetch = require('./plugins/fetch.json');
        for (var plugin in fetch) {
            console.log("Fetching plugin: " + plugin);
            fs.copySync("node_modules/" + plugin, "plugins/" + plugin);
        }
    }
    FetchPlugins.init = init;
})(FetchPlugins = exports.FetchPlugins || (exports.FetchPlugins = {}));
