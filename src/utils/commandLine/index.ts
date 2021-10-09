import inquirer from 'inquirer';
import showFileContent from '../showFileContent';
import { blue, cyanBright, grey, yellow } from 'chalk';
import autocomplete from 'inquirer-autocomplete-prompt';
import showScripts from '../showScripts';
import showMarkdownFiles from '../showMarkdownFiles';
import emptyLine from '../emptyLine';
import showReadme from '../showReadme';
import getMarkdownFiles from '../getMarkdownFiles';
inquirer.registerPrompt('autocomplete', autocomplete);

const COMMANDS_LIST = [
  '[a]-show all',
  '[l]-options list',
  '[h]-help',
  '[q]-quit',
  'package.json scripts',
];

const showOptions = async () => {
  await showScripts();
  await showMarkdownFiles({
    titleOnly: true,
  });
  // await showMarkdownFiles();
};

const handleCommand = async (answer: string, files: string[]) => {
  const commandMatch = answer.match(COMMAND_REGEX);
  const item = commandMatch && commandMatch[1];
  switch (item) {
    case 'h':
      console.clear();
      console.log(
        grey('Help in development.'),
        'Use commands:',
        blue('how, how --help'),
      );
      emptyLine();
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
      if (answer === 'package.json scripts') {
        await showScripts();
        return;
      }
      if (files.includes(answer)) {
        await showFileContent({ name: answer, full: true });
        return;
      }
      emptyLine();
      console.log('Unknown command. Sorry...');
      emptyLine();
  }
  // files.filter((name: string) => name.toLowerCase().includes(answer));
};

type ReadCommandArgs = {
  files: string[];
};

const readCommand = async ({ files }: ReadCommandArgs) => {
  const options = COMMANDS_LIST.concat(files);
  return await inquirer.prompt([
    {
      type: 'autocomplete',
      name: 'command',
      emptyText: 'Try search anything...',
      message: 'command',
      source: (answersSoFar: any, input: string) => {
        return options.filter(
          (item) =>
            item.toLowerCase().indexOf((input || '').toLowerCase()) !== -1,
        );
      },
    },
  ]);
};

const COMMAND_REGEX = /\[(.+)\].*/;

const commandLine = async () => {
  const files = await getMarkdownFiles();

  while (true) {
    const { command } = await readCommand({ files });
    console.clear();
    await handleCommand(command, files);
  }
};

export default commandLine;
