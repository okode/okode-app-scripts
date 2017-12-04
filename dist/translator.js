"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Translator;
(function (Translator) {
    function init(csvFile) {
        if (csvFile == null || csvFile.toUpperCase().endsWith('.CSV')) {
            console.log('Args example: csv_file_to_translate.csv');
        }
        else {
            fs.readFile(csvFile, 'utf8', csvHandler);
        }
    }
    Translator.init = init;
    function csvHandler(err, data) {
        if (err)
            throw err;
        // get one level JSON
        var obj = csvToJson(data);
        // parse JSON to multiple levels
        var multiLevelObj = getMultiLevelJson(obj);
        // make JSON string
        var str = JSON.stringify(multiLevelObj, null, 2);
        // write result to file
        var csvFile = process.argv[2];
        var fileName = csvFile.slice(0, csvFile.toUpperCase().lastIndexOf('.CSV'));
        var destFile = fileName + ".json";
        fs.writeFileSync(destFile, str, 'utf8');
    }
    function csvToJson(data) {
        var obj = {};
        var csvEOL = (data.indexOf('\r\n') > -1) ? '\r\n' : '\n';
        data.split(csvEOL).forEach(function (line) {
            var attr = line.slice(0, line.indexOf(';'));
            obj[attr] = line.slice(line.indexOf(';') + 1);
        });
        return obj;
    }
    function getMultiLevelJson(jsonObject) {
        var obj = {};
        Object.keys(jsonObject).forEach(function (key) {
            var splitKeys = key.split('/');
            createEntries(obj, splitKeys, jsonObject[key]);
        });
        return obj;
    }
    function createEntries(obj, splitKeys, value) {
        if (splitKeys.length > 1) {
            if (!obj[splitKeys[0]]) {
                obj[splitKeys[0]] = {};
            }
            createEntries(obj[splitKeys[0]], splitKeys.slice(1), value);
        }
        else {
            obj[splitKeys[0]] = value;
        }
    }
})(Translator = exports.Translator || (exports.Translator = {}));
