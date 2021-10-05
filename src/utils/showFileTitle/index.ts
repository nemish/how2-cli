import { grey, red, yellow } from 'chalk';
import { highlight } from 'cli-highlight';
import emptyLine from '../emptyLine';
import delimiter from '../delimiter';
import doReadFile from '../doReadFile';

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
    highlight(linesToShow.join('\n'), {
      language: 'markdown',
      ignoreIllegals: true,
    }),
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

const showFileTitle = async ({ name, full }: Args) => {
  console.log(grey(name));
  delimiter();
  emptyLine();
};

export default showFileTitle;
