"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("./generator");
var translator_1 = require("./translator");
function start(args) {
    switch (args[2]) {
        /**
         * Generator
         */
        case 'generator':
        case '-g':
            generator_1.Generator.init(args[3], args[4]);
            return;
        /**
         * Translator
         */
        case 'translator':
        case '-t':
            translator_1.Translator.init(args[3]);
            return;
        default: console.log('Invalid command');
    }
}
exports.start = start;
