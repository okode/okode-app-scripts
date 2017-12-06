"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Generator --------------------------------------------------------------------------------------
var Generator;
(function (Generator) {
    function init(typeParam, nameParam) {
        type = Utils.isValidType(typeParam) ? typeParam : null;
        name = nameParam;
        if (type && name)
            generate();
        else
            Utils.showErrorInvalidArgs();
    }
    Generator.init = init;
    var fs = require('fs');
    var util = require('util');
    var read = util.promisify(fs.readFile);
    var write = util.promisify(fs.writeFile);
    var tmplDir = __dirname + '/../assets/templates';
    var type;
    var name;
    function generate() {
        switch (type) {
            case 'page':
                generatePage();
                break;
            case 'component':
                generateComponent();
                break;
            case 'directive':
                generateDirective();
                break;
            case 'pipe':
                generatePipe();
                break;
            case 'service':
                generateService();
                break;
        }
    }
    // page
    function generatePage() {
        return __awaiter(this, void 0, void 0, function () {
            var tmpl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Utils.mkdir('./src/pages');
                        Utils.mkdir("./src/pages/" + name);
                        return [4 /*yield*/, read(tmplDir + "/page/ts.tmpl")];
                    case 1:
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/pages/" + name + "/" + name + ".ts", Utils.replaceTmpl(tmpl, name))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, read(tmplDir + "/page/module.ts.tmpl")];
                    case 3:
                        // .module.ts
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/pages/" + name + "/" + name + ".module.ts", Utils.replaceTmpl(tmpl, name))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, read(tmplDir + "/page/html.tmpl")];
                    case 5:
                        // .html
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/pages/" + name + "/" + name + ".html", Utils.replaceTmpl(tmpl, name))];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, read(tmplDir + "/page/scss.tmpl")];
                    case 7:
                        // .scss
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/pages/" + name + "/" + name + ".scss", Utils.replaceTmpl(tmpl, name))];
                    case 8:
                        _a.sent();
                        //
                        Utils.showSuccess(type, name);
                        return [2 /*return*/];
                }
            });
        });
    }
    // component
    function generateComponent() {
        return __awaiter(this, void 0, void 0, function () {
            var tmpl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Utils.mkdir('./src/components');
                        Utils.mkdir("./src/components/" + name);
                        return [4 /*yield*/, read(tmplDir + "/component/ts.tmpl")];
                    case 1:
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/components/" + name + "/" + name + ".ts", Utils.replaceTmpl(tmpl, name))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, read(tmplDir + "/component/module.ts.tmpl")];
                    case 3:
                        // .module.ts
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/components/" + name + "/" + name + ".module.ts", Utils.replaceTmpl(tmpl, name))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, read(tmplDir + "/component/html.tmpl")];
                    case 5:
                        // .html
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/components/" + name + "/" + name + ".html", Utils.replaceTmpl(tmpl, name))];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, read(tmplDir + "/component/scss.tmpl")];
                    case 7:
                        // .scss
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/components/" + name + "/" + name + ".scss", Utils.replaceTmpl(tmpl, name))];
                    case 8:
                        _a.sent();
                        //
                        Utils.showSuccess(type, name);
                        return [2 /*return*/];
                }
            });
        });
    }
    // directive
    function generateDirective() {
        return __awaiter(this, void 0, void 0, function () {
            var tmpl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Utils.mkdir('./src/directives');
                        Utils.mkdir("./src/directives/" + name);
                        return [4 /*yield*/, read(tmplDir + "/directive/ts.tmpl")];
                    case 1:
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/directives/" + name + "/" + name + ".ts", Utils.replaceTmpl(tmpl, name))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, read(tmplDir + "/directive/module.ts.tmpl")];
                    case 3:
                        // .module.ts
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/directives/" + name + "/" + name + ".module.ts", Utils.replaceTmpl(tmpl, name))];
                    case 4:
                        _a.sent();
                        //
                        Utils.showSuccess(type, name);
                        return [2 /*return*/];
                }
            });
        });
    }
    // pipe
    function generatePipe() {
        return __awaiter(this, void 0, void 0, function () {
            var tmpl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Utils.mkdir('./src/pipes');
                        Utils.mkdir("./src/pipes/" + name);
                        return [4 /*yield*/, read(tmplDir + "/pipe/ts.tmpl")];
                    case 1:
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/pipes/" + name + "/" + name + ".ts", Utils.replaceTmpl(tmpl, name))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, read(tmplDir + "/pipe/module.ts.tmpl")];
                    case 3:
                        // .module.ts
                        tmpl = _a.sent();
                        return [4 /*yield*/, write("./src/pipes/" + name + "/" + name + ".module.ts", Utils.replaceTmpl(tmpl, name))];
                    case 4:
                        _a.sent();
                        //
                        Utils.showSuccess(type, name);
                        return [2 /*return*/];
                }
            });
        });
    }
    // service
    function generateService() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                Utils.showError('TODO generateService');
                return [2 /*return*/];
            });
        });
    }
})(Generator = exports.Generator || (exports.Generator = {}));
// Utils ------------------------------------------------------------------------------------------
var Utils;
(function (Utils) {
    var types = ['page', 'component', 'directive', 'pipe', 'service'];
    var c = require('colors');
    function isValidType(type) {
        return types.indexOf(type) >= 0;
    }
    Utils.isValidType = isValidType;
    function mkdir(path) {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }
    Utils.mkdir = mkdir;
    function showError(err) {
        console.log('\n' + c.red('ERROR: ' + err) + '\n');
    }
    Utils.showError = showError;
    function showErrorInvalidArgs() {
        console.log('\n' + c.red('ERROR: Invalid args'));
        console.log('       Usage example: ' + c.green('generator TYPE NAME'));
        console.log('       TYPE must be one of: ' + c.green(types.join(', ')));
        console.log('       NAME must be lowercase with - separating words: looks-like-this\n');
    }
    Utils.showErrorInvalidArgs = showErrorInvalidArgs;
    function showSuccess(type, name) {
        console.log('\n' + c.green('Success!'));
        console.log('Generated a ' + c.green(type) + ' named ' + c.green(name) + '\n');
    }
    Utils.showSuccess = showSuccess;
    function snakeToCamelCase(s) {
        var r = s.replace(/(\-\w)/g, function (m) { return m[1].toUpperCase(); });
        return r.charAt(0).toUpperCase() + r.slice(1);
    }
    Utils.snakeToCamelCase = snakeToCamelCase;
    function replaceTmpl(content, name) {
        var className = Utils.snakeToCamelCase(name);
        content = content.toString();
        content = content.replace(/\$FILENAME\$/gi, name);
        content = content.replace(/\$CLASSNAME\$/gi, className);
        return content;
    }
    Utils.replaceTmpl = replaceTmpl;
})(Utils || (Utils = {}));
