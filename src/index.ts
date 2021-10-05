#! /usr/bin/env node
import { Command } from 'commander';
import { blue, cyanBright, grey, yellow } from 'chalk';
import askQuestion from './utils/askQuestion';
import showScripts from './utils/showScripts';
import showMarkdownFiles from './utils/showMarkdownFiles';
import emptyLine from './utils/emptyLine';
import showReadme from './utils/showReadme';

const COMMANDS_LIST = [
  '[a]-show all',
  '[l]-options list',
  '[rdm]-readme',
  '[sc]-show scripts',
  '[h]-help',
  '[q]-quit',
];

const program = new Command();
program.version('0.0.3');

program.option('-d, --debug', 'output args');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
if (options.file) console.log(`- ${options.file}`);

const handleAnswer = async (answer: string) => {
  switch (answer) {
    case 'h':
      console.clear();
      console.log(
        grey('Help in development.'),
        'Use commands:',
        blue('how, how --help'),
      );
      emptyLine();
      break;
    case 'sc':
      console.clear();
      await showScripts();
      break;
    case 'rdm':
      console.clear();
      await showReadme({ full: true });
      break;
    case 'l':
      console.clear();
      await showOptions();
      break;
    case 'a':
      console.clear();
      await showScripts();
      await showMarkdownFiles();
      break;
    case 'q':
      process.exit();
    default:
      console.log('Unknown command. Sorry.');
  }
};

const showOptions = async () => {
  await showScripts();
  await showMarkdownFiles({
    titleOnly: true,
  });
  // await showMarkdownFiles();
};

const run = async () => {
  await showOptions();
  while (true) {
    console.log(yellow(`What's next?`));
    COMMANDS_LIST.forEach((cmd) => {
      console.log(cyanBright(cmd));
    });
    const answer = await askQuestion('');
    await handleAnswer(answer);
  }
};

console.clear();
run();
