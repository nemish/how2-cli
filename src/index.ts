#! /usr/bin/env node
import { Command } from 'commander';
import { cyanBright, grey, yellow } from 'chalk';
import askQuestion from './utils/askQuestion';
import showScripts from './utils/showScripts';
import showMarkdownFiles from './utils/showMarkdownFiles';
import emptyLine from './utils/emptyLine';
import showReadme from './utils/showReadme';
import commandLine from './utils/commandLine';
import readPackageJson from './utils/readPackageJson';
import delimiter from './utils/delimiter';

const program = new Command();
program.version('0.0.3');

program.option('-d, --debug', 'output args');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
if (options.file) console.log(`- ${options.file}`);

const showOptions = async () => {
  const packageJson = await readPackageJson();
  emptyLine();
  console.log(cyanBright(`#### Howpage: ${packageJson.name}`));
  delimiter({
    symbol: '*',
  });
  await showScripts(packageJson.scripts);
  await showMarkdownFiles({
    titleOnly: true,
  });
  emptyLine();
  // await showMarkdownFiles();
};

// const simpleCommandLine = async () => {
//   while (true) {
//     console.log(yellow(`What's next?`));
//     commandsList();
//     const answer = await askQuestion('');
//     await handleAnswer(answer);
//   }
// };

const run = async () => {
  await showOptions();
  // commandsList();
  // await simpleCommandLine();
  commandLine();
};

console.clear();
run();
