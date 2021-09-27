#! /usr/bin/env node
import { Command } from "commander";
import { readFile } from "fs";
const program = new Command();
program.version("0.0.1");

program
  .option("-d, --debug", "output extra debugging")
  .option("-f, --file <type>", "filename");

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log("Log:");
if (options.file) console.log(`- ${options.file}`);

// const readFile = (filepath) => {
//   fs.readFile(filepath, 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(data)
//   })
// }

readFile(
  options.file || "README.md",
  "utf-8",
  (err: any, data: string | Buffer): void => {
    if (typeof data === "string") {
      console.log("this is string: ", data);
      return;
    }
    console.log(options.file, data.toJSON());
  }
);
