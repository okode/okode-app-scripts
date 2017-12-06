"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("./generator");
var translator_1 = require("./translator");
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
         * Translator
         * ----------
         */
        case 'translator':
        case '-t':
            translator_1.Translator.init(params[0]);
            return;
        /**/
        default: console.log('Invalid command');
    }
}
exports.start = start;
