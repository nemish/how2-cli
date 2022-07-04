import { grey, red, yellow } from 'chalk';
import { highlight } from 'cli-highlight';
import marked from 'marked';
import MarkedTerminal from 'marked-terminal';
import emptyLine from '../emptyLine';
import delimiter from '../delimiter';
import doReadFile from '../doReadFile';
import getDelimiterString from '../getDelimiterString';

marked.setOptions({
  renderer: new MarkedTerminal(),
});

type Args = {
  full?: boolean;
  name: string;
  linesCount?: number;
};

type HandleDataArgs = {
  full: boolean;
  data: string;
  linesCount?: number;
};

const getLines = ({ data, full, linesCount }: HandleDataArgs) => {
  const lines = data.split('\n');
  const linesToShow = full ? lines : lines.slice(0, linesCount || 20);
  const elems = marked(linesToShow.join('\n')).split('\n');
  if (lines.length !== linesToShow.length) {
    elems.push(grey(`Lines ${linesToShow.length} of ${lines.length}`));
  }
  return elems;
};

const getFileContentLines = async ({ name, full, linesCount }: Args) => {
  try {
    const data = await doReadFile({
      filename: name,
    });
    if (typeof data !== 'string') {
      return ['[data in json format]'];
    }
    const elems = [yellow(name)];
    elems.push(getDelimiterString());
    elems.push.apply(elems, getLines({ data, full: !!full, linesCount }));
    elems.push(getDelimiterString());
    elems.push.apply(elems, ['\n', '\n']);
    return elems;
  } catch (err) {
    console.log(red(`There is no ${name} file`));
    return [];
  }
};

export default getFileContentLines;
