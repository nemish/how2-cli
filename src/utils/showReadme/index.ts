import { grey, red, yellow } from 'chalk';
import { highlight } from 'cli-highlight';
import emptyLine from '../emptyLine';
import delimiter from '../delimiter';
import doReadFile from '../doReadFile';

type Args = {
  full?: boolean;
};

type HandleDataArgs = {
  full: boolean;
  data: string;
};

const handleData = ({ data, full }: HandleDataArgs) => {
  const lines = data.split('\n');
  const linesToShow = full ? lines : lines.slice(0, 20);
  console.log(
    highlight(linesToShow.join('\n'), {
      language: 'markdown',
      ignoreIllegals: true,
    }),
  );
  if (lines.length !== linesToShow.length) {
    emptyLine();
    console.log(
      yellow(
        `${linesToShow.length} of ${lines.length} lines shown. To see more type "readme" command.`,
      ),
    );
  }
};

const showReadme = async (options?: Args) => {
  const full = !!(options && options.full);
  emptyLine();
  console.log(grey('README.md'));
  delimiter();
  emptyLine();
  await doReadFile({
    filename: 'README.md',
  })
    .then((data) => {
      if (typeof data !== 'string') {
        console.log(data.toJSON());
        return;
      }
      handleData({ data, full });
    })
    .catch((err) => console.log(red('There is no README.md file')));
  emptyLine();
  delimiter();
  emptyLine(3);
};

export default showReadme;
