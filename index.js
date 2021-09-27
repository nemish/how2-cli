#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var fs_1 = require("fs");
var program = new commander_1.Command();
program.version("0.0.1");
program
    .option("-d, --debug", "output extra debugging")
    .option("-f, --file <type>", "filename");
program.parse(process.argv);
var options = program.opts();
if (options.debug)
    console.log(options);
console.log("Log:");
if (options.file)
    console.log("- " + options.file);
// const readFile = (filepath) => {
//   fs.readFile(filepath, 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(data)
//   })
// }
(0, fs_1.readFile)(options.file || "README.md", "utf-8", function (err, data) {
    if (typeof data === "string") {
        console.log("this is string: ", data);
        return;
    }
    console.log(options.file, data.toJSON());
});
