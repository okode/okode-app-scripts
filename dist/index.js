"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("./generator");
var csv2json_1 = require("./csv2json");
var fetch_plugins_1 = require("./fetch-plugins");
function start(args) {
    var command = (args && args.length >= 2) ? args[2] : null;
    var params = (args && args.length >= 3) ? args.slice(3, args.length) : [];
    switch (command) {
        /**
         * Generator
         * ---------
         */
        case 'generator':
        case '-g':
            generator_1.Generator.init(params[0], params[1]);
            return;
        /**
         * CSV2JSON
         * --------
         */
        case 'csv2json':
        case '-c2j':
            csv2json_1.CSV2JSON.init(params[0]);
            return;
        /**
         * FetchPlugins
         * ------------
         */
        case 'fetch-plugins':
        case '-fp':
            fetch_plugins_1.FetchPlugins.init();
            return;
        /**/
        default: console.log('Invalid command');
    }
}
exports.start = start;
