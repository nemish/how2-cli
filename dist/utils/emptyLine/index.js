"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emptyLine = function (number) {
    Array.from({
        length: number || 1,
    }).forEach(function () {
        console.log("");
    });
};
exports.default = emptyLine;
