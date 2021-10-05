#! /usr/bin/env node
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
var commander_1 = require("commander");
var chalk_1 = require("chalk");
var askQuestion_1 = __importDefault(require("./utils/askQuestion"));
var showScripts_1 = __importDefault(require("./utils/showScripts"));
var showMarkdownFiles_1 = __importDefault(require("./utils/showMarkdownFiles"));
var emptyLine_1 = __importDefault(require("./utils/emptyLine"));
var showReadme_1 = __importDefault(require("./utils/showReadme"));
var COMMANDS_LIST = [
    '[a]-show all',
    '[l]-options list',
    '[rdm]-readme',
    '[sc]-show scripts',
    '[h]-help',
    '[q]-quit',
];
var program = new commander_1.Command();
program.version('0.0.3');
program.option('-d, --debug', 'output args');
program.parse(process.argv);
var options = program.opts();
if (options.debug)
    console.log(options);
if (options.file)
    console.log("- " + options.file);
var handleAnswer = function (answer) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = answer;
                switch (_a) {
                    case 'h': return [3 /*break*/, 1];
                    case 'sc': return [3 /*break*/, 2];
                    case 'rdm': return [3 /*break*/, 4];
                    case 'l': return [3 /*break*/, 6];
                    case 'a': return [3 /*break*/, 8];
                    case 'q': return [3 /*break*/, 11];
                }
                return [3 /*break*/, 12];
            case 1:
                console.clear();
                console.log((0, chalk_1.grey)('Help in development.'), 'Use commands:', (0, chalk_1.blue)('how, how --help'));
                (0, emptyLine_1.default)();
                return [3 /*break*/, 13];
            case 2:
                console.clear();
                return [4 /*yield*/, (0, showScripts_1.default)()];
            case 3:
                _b.sent();
                return [3 /*break*/, 13];
            case 4:
                console.clear();
                return [4 /*yield*/, (0, showReadme_1.default)({ full: true })];
            case 5:
                _b.sent();
                return [3 /*break*/, 13];
            case 6:
                console.clear();
                return [4 /*yield*/, showOptions()];
            case 7:
                _b.sent();
                return [3 /*break*/, 13];
            case 8:
                console.clear();
                return [4 /*yield*/, (0, showScripts_1.default)()];
            case 9:
                _b.sent();
                return [4 /*yield*/, (0, showMarkdownFiles_1.default)()];
            case 10:
                _b.sent();
                return [3 /*break*/, 13];
            case 11:
                process.exit();
                _b.label = 12;
            case 12:
                console.log('Unknown command. Sorry.');
                _b.label = 13;
            case 13: return [2 /*return*/];
        }
    });
}); };
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
var commandLine = function () { return __awaiter(void 0, void 0, void 0, function () {
    var answer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 3];
                console.log((0, chalk_1.yellow)("What's next?"));
                commandsList();
                return [4 /*yield*/, (0, askQuestion_1.default)('')];
            case 1:
                answer = _a.sent();
                return [4 /*yield*/, handleAnswer(answer)];
            case 2:
                _a.sent();
                return [3 /*break*/, 0];
            case 3: return [2 /*return*/];
        }
    });
}); };
var commandsList = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        COMMANDS_LIST.forEach(function (cmd) {
            console.log((0, chalk_1.cyanBright)(cmd));
        });
        return [2 /*return*/];
    });
}); };
var run = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, showOptions()];
            case 1:
                _a.sent();
                // commandsList();
                return [4 /*yield*/, commandLine()];
            case 2:
                // commandsList();
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
console.clear();
run();
