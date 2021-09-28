#! /usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";

import { readFile } from "fs";
const program = new Command();
program.version("0.0.1");

program
  .option("-d, --debug", "output extra debugging")
  .option("-w, --welcome", "Welcome message")
  .option("-f, --file <type>", "filename");

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
if (options.file) console.log(`- ${options.file}`);

if (options.welcome) {
  console.log(chalk.blue("Hello world!"));
}

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
