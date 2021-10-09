"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var showFileContent_1 = __importDefault(require("../showFileContent"));
var chalk_1 = require("chalk");
var inquirer_autocomplete_prompt_1 = __importDefault(require("inquirer-autocomplete-prompt"));
var showScripts_1 = __importDefault(require("../showScripts"));
var showMarkdownFiles_1 = __importDefault(require("../showMarkdownFiles"));
var emptyLine_1 = __importDefault(require("../emptyLine"));
var getMarkdownFiles_1 = __importDefault(require("../getMarkdownFiles"));
inquirer_1.default.registerPrompt('autocomplete', inquirer_autocomplete_prompt_1.default);
var COMMANDS_LIST = [
    '[a]-show all',
    '[l]-options list',
    '[h]-help',
    '[q]-quit',
    'package.json scripts',
];
var showOptions = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, showScripts_1.default)()];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, showMarkdownFiles_1.default)({
                        titleOnly: true,
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var handleCommand = function (answer, files) { return __awaiter(void 0, void 0, void 0, function () {
    var commandMatch, item, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                commandMatch = answer.match(COMMAND_REGEX);
                item = commandMatch && commandMatch[1];
                _a = item;
                switch (_a) {
                    case 'h': return [3 /*break*/, 1];
                    case 'l': return [3 /*break*/, 2];
                    case 'a': return [3 /*break*/, 4];
                    case 'q': return [3 /*break*/, 7];
                }
                return [3 /*break*/, 8];
            case 1:
                console.clear();
                console.log((0, chalk_1.grey)('Help in development.'), 'Use commands:', (0, chalk_1.blue)('how, how --help'));
                (0, emptyLine_1.default)();
                return [3 /*break*/, 13];
            case 2:
                console.clear();
                return [4 /*yield*/, showOptions()];
            case 3:
                _b.sent();
                return [3 /*break*/, 13];
            case 4:
                console.clear();
                return [4 /*yield*/, (0, showScripts_1.default)()];
            case 5:
                _b.sent();
                return [4 /*yield*/, (0, showMarkdownFiles_1.default)()];
            case 6:
                _b.sent();
                return [3 /*break*/, 13];
            case 7:
                process.exit();
                _b.label = 8;
            case 8:
                if (!(answer === 'package.json scripts')) return [3 /*break*/, 10];
                return [4 /*yield*/, (0, showScripts_1.default)()];
            case 9:
                _b.sent();
                return [2 /*return*/];
            case 10:
                if (!files.includes(answer)) return [3 /*break*/, 12];
                return [4 /*yield*/, (0, showFileContent_1.default)({ name: answer, full: true })];
            case 11:
                _b.sent();
                return [2 /*return*/];
            case 12:
                (0, emptyLine_1.default)();
                console.log('Unknown command. Sorry...');
                (0, emptyLine_1.default)();
                _b.label = 13;
            case 13: return [2 /*return*/];
        }
    });
}); };
var readCommand = function (_a) {
    var files = _a.files;
    return __awaiter(void 0, void 0, void 0, function () {
        var options;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    options = COMMANDS_LIST.concat(files);
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'autocomplete',
                                name: 'command',
                                emptyText: 'Try search anything...',
                                message: 'command',
                                source: function (answersSoFar, input) {
                                    return options.filter(function (item) {
                                        return item.toLowerCase().indexOf((input || '').toLowerCase()) !== -1;
                                    });
                                },
                            },
                        ])];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
var COMMAND_REGEX = /\[(.+)\].*/;
var commandLine = function () { return __awaiter(void 0, void 0, void 0, function () {
    var files, command;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, getMarkdownFiles_1.default)()];
            case 1:
                files = _a.sent();
                _a.label = 2;
            case 2:
                if (!true) return [3 /*break*/, 5];
                return [4 /*yield*/, readCommand({ files: files })];
            case 3:
                command = (_a.sent()).command;
                console.clear();
                return [4 /*yield*/, handleCommand(command, files)];
            case 4:
                _a.sent();
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.default = commandLine;
