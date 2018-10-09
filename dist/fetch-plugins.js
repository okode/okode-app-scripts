"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var shell = require("shelljs");
var FetchPlugins;
(function (FetchPlugins) {
    function init() {
        console.log('WARN: Fetch plugins is deprecated.');
        fs.readFile;
        var fetch = JSON.parse(fs.readFileSync('plugins/fetch.json', 'utf8'));
        for (var plugin in fetch) {
            console.log("Fetching plugin: " + plugin);
            var src = "node_modules/" + plugin;
            if (!fs.pathExistsSync(src)) {
                console.log("Installing plugin via npm: " + fetch[plugin].source.id);
                var execOutput = shell.exec("npm install " + fetch[plugin].source.id + " --no-save");
                if (execOutput !== null && execOutput.code !== 0) {
                    console.log("Skipping plugin " + plugin);
                    continue;
                }
            }
            if (fs.pathExistsSync(src)) {
                fs.copySync(src, "plugins/" + plugin);
            }
        }
    }
    FetchPlugins.init = init;
})(FetchPlugins = exports.FetchPlugins || (exports.FetchPlugins = {}));
