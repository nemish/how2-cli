"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var askQuestion = function (query) {
    var rl = (0, readline_1.createInterface)({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(function (resolve) {
        return rl.question(query, function (ans) {
            rl.close();
            resolve(ans);
        });
    });
};
exports.default = askQuestion;
