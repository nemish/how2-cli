#! /usr/bin/env node
import { Command } from 'commander';
import { blue, cyanBright, grey, yellow } from 'chalk';
import askQuestion from './utils/askQuestion';
import showScripts from './utils/showScripts';
import showReadme from './utils/showReadme';

const COMMANDS_LIST = [
  '[a]-show all',
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
      console.log(
        grey('List of options will be here soon.'),
        'Use commands:',
        blue('how, how --help'),
      );
      break;
    case 'sc':
      console.clear();
      await showScripts();
      break;
    case 'rdm':
      console.clear();
      await showReadme({ full: true });
      break;
    case 'a':
      console.clear();
      await showScripts();
      await showReadme();
      break;
    case 'q':
      process.exit();
    default:
      console.log('Unknown command. Sorry.');
  }
};

const run = async () => {
  await showScripts();
  await showReadme();
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
