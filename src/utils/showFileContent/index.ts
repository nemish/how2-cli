import { grey, red, yellow } from 'chalk';
import { highlight } from 'cli-highlight';
import marked from 'marked';
import MarkedTerminal from 'marked-terminal';
import emptyLine from '../emptyLine';
import delimiter from '../delimiter';
import doReadFile from '../doReadFile';

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

const handleData = ({ data, full, linesCount }: HandleDataArgs) => {
  const lines = data.split('\n');
  const linesToShow = full ? lines : lines.slice(0, linesCount || 20);
  console.log(marked(linesToShow.join('\n')));
  if (lines.length !== linesToShow.length) {
    console.log(grey(`Lines ${linesToShow.length} of ${lines.length}`));
  }
};

const showFileContent = async ({ name, full, linesCount }: Args) => {
  await doReadFile({
    filename: name,
  })
    .then((data) => {
      if (typeof data !== 'string') {
        console.warn('[data in json format]', data.toJSON());
        return;
      }
      console.log(yellow(name));
      delimiter();
      handleData({ data, full: !!full, linesCount });
      delimiter();
      emptyLine(2);
    })
    .catch((err) => console.log(red(`There is no ${full} file`)));
};

export default showFileContent;
