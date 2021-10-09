"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var delimiter = function (options) {
    console.log(Array.from({ length: 30 })
        .map(function () { return (options === null || options === void 0 ? void 0 : options.symbol) || '-'; })
        .join(''));
};
exports.default = delimiter;
