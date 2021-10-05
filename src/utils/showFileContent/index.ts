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
};

type HandleDataArgs = {
  full: boolean;
  data: string;
};

const handleData = ({ data, full }: HandleDataArgs) => {
  const lines = data.split('\n');
  const linesToShow = full ? lines : lines.slice(0, 20);
  console.log(
    marked(linesToShow.join('\n')),
    // highlight(, {
    //   language: 'markdown',
    //   ignoreIllegals: true,
    // }),
  );
  if (lines.length !== linesToShow.length) {
    emptyLine();
    console.log(
      yellow(
        `${linesToShow.length} of ${lines.length} lines shown. To see more type "rdm" command.`,
      ),
    );
  }
};

const showFileContent = async ({ name, full }: Args) => {
  await doReadFile({
    filename: name,
  })
    .then((data) => {
      if (typeof data !== 'string') {
        console.warn('[data in json format]', data.toJSON());
        return;
      }
      emptyLine();
      console.log(grey(name));
      delimiter();
      emptyLine();
      handleData({ data, full: !!full });
      emptyLine();
      delimiter();
      emptyLine(3);
    })
    .catch((err) => console.log(red(`There is no ${full} file`)));
};

export default showFileContent;
