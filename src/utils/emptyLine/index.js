"use strict";
exports.__esModule = true;
var emptyLine = function (number) {
    Array.from({
        length: number || 1
    }).forEach(function () {
        console.log("");
    });
};
exports["default"] = emptyLine;
