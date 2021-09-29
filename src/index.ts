#! /usr/bin/env node
import { Command } from "commander";
import { blue, grey } from "chalk";
import emptyLine from "./utils/emptyLine";
import delimiter from "./utils/delimiter";
import doReadFile from "./utils/doReadFile";
import askQuestion from "./utils/askQuestion";

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
        grey("List of options will be here soon."),
        "Use commands:",
        blue("how, how --help")
      );
      break;
    case "q":
      process.exit();
      break;
    default:
      console.log("Unknown command. Sorry.");
  }
};

const run = async () => {
  emptyLine();
  console.log(grey("package.json scripts"));
  delimiter();
  emptyLine();
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
  emptyLine();
  delimiter();
  emptyLine(3);
  console.log(grey(`${options.file || "README.md"}`));
  delimiter();
  emptyLine();
  await doReadFile({
    filename: options.file || "README.md",
  }).then((data) => {
    if (typeof data === "string") {
      console.log(data.substr(0, 500));
      return;
    }
    console.log(options.file, data.toJSON());
  });
  emptyLine();
  delimiter();
  emptyLine(3);
  while (true) {
    console.log(blue(`What's next? ${COMMANDS_LIST}`));
    const answer = await askQuestion("");
    handleAnswer(answer);
  }
};

console.clear();
run();
