"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var shell = require("shelljs");
var FetchPlugins;
(function (FetchPlugins) {
    function init() {
        fs.readFile;
        var fetch = JSON.parse(fs.readFileSync('plugins/fetch.json', 'utf8'));
        for (var plugin in fetch) {
            console.log("Fetching plugin: " + plugin);
            var src = "node_modules/" + plugin;
            if (!fs.pathExistsSync(src)) {
                console.log("Installing plugin via npm: " + fetch[plugin].source.id);
                if (shell.exec("npm install " + fetch[plugin].source.id + " --no-save").code !== 0) {
                    console.log("Skipping plugin " + plugin);
                    continue;
                }
            }
            fs.copySync(src, "plugins/" + plugin);
        }
    }
    FetchPlugins.init = init;
})(FetchPlugins = exports.FetchPlugins || (exports.FetchPlugins = {}));
