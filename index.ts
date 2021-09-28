#! /usr/bin/env node
import { Command } from "commander";
import { blue, grey } from "chalk";
import { createInterface } from "readline";

function askQuestion(query: string) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<string>((resolve) =>
    rl.question(query, (ans: string) => {
      rl.close();
      resolve(ans);
    })
  );
}

import { readFile } from "fs";

// const COMMANDS_LIST = "[h]-help, [s]-search, [q]-quit";
const COMMANDS_LIST = "[h]-help, [q]-quit";

const program = new Command();
program.version("0.0.3");

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

const handleAnswer = async (answer: string) => {
  switch (answer) {
    case "h":
      console.log(
        "List of options will be here soon.",
        grey("For now just use "),
        blue("how")
      );
      break;
    case "q":
      process.exit();
      break;
    default:
      console.log("Unknown command. Sorry.");
  }
};

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
  console.log(grey("package.json scripts"));
  console.log(
    Array.from({ length: 60 })
      .map(() => "-")
      .join("")
  );
  console.log("");
  await doReadFile({
    filename: "package.json",
  }).then((data) => {
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
  console.log(grey(`${options.file || "README.md"}`));
  console.log(
    Array.from({ length: 60 })
      .map(() => "-")
      .join("")
  );
  console.log("");
  await doReadFile({
    filename: options.file || "README.md",
  }).then((data) => {
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
  while (true) {
    console.log(blue(`What's next? ${COMMANDS_LIST}`));
    const answer = await askQuestion("");
    handleAnswer(answer);
  }
};

console.clear();
run();
