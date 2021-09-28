#! /usr/bin/env node
import { Command } from "commander";
import { blue, grey } from "chalk";

import { readFile } from "fs";
const program = new Command();
program.version("0.0.2");

program
  .option("-d, --debug", "output extra debugging")
  .option("-w, --welcome", "Welcome message")
  .option("-f, --file <type>", "filename");

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
if (options.file) console.log(`- ${options.file}`);

if (options.welcome) {
  console.log(blue("Hello world!"));
}

type DoReadFileArgs = {
  filename: string;
};

const doReadFile = async ({ filename }: DoReadFileArgs) => {
  return await new Promise<string | Buffer>((res, rej) => {
    readFile(filename, "utf-8", (err: any, data: string | Buffer): void => {
      if (err) {
        return rej(err);
      }
      return res(data);
    });
  });
};

const run = async () => {
  console.log("");
  console.log("");
  console.log("");
  console.log(
    Array.from({ length: 60 })
      .map(() => "-")
      .join("")
  );
  await doReadFile({
    filename: "package.json",
  }).then((data) => {
    console.log(grey("package.json scripts"));
    console.log("");
    if (typeof data === "string") {
      const config = JSON.parse(data);
      console.log(config.scripts || "No scripts");
      return;
    }
    console.log(options.file, data.toJSON());
  });
  console.log("");
  console.log(
    Array.from({ length: 60 })
      .map(() => "-")
      .join("")
  );
  console.log("");
  console.log("");
  console.log("");
  console.log(
    Array.from({ length: 60 })
      .map(() => "-")
      .join("")
  );
  await doReadFile({
    filename: options.file || "README.md",
  }).then((data) => {
    console.log(grey(`First part of ${options.file || "README.md"}`));
    console.log("");
    if (typeof data === "string") {
      console.log(data.substr(0, 500));
      return;
    }
    console.log(options.file, data.toJSON());
  });
  console.log("");
  console.log(
    Array.from({ length: 60 })
      .map(() => "-")
      .join("")
  );
  console.log("");
  console.log("");
  console.log("");
};

run();
