import showFileContent from '../showFileContent';
import showFileTitle from '../showFileTitle';
import { readdir } from 'fs';
import { bgYellow } from 'chalk';

type Args = {
  titleOnly?: boolean;
  full?: boolean;
};

type HandleFileArgs = {
  name: string;
  titleOnly: boolean;
};

const handleFile = async ({ name, titleOnly }: HandleFileArgs) => {
  if (!name) {
    return;
  }
  if (name.toLowerCase().endsWith('.md')) {
    if (titleOnly) {
      showFileTitle({ name });
      return;
    }
    await showFileContent({
      name,
    });
  }
};

const showMarkdownFiles = async (options?: Args) => {
  const { titleOnly = false } = options || {};
  return new Promise((res, rej) => {
    readdir('.', async (err, files) => {
      if (err) {
        return;
      }
      await Promise.all(files.map((name) => handleFile({ name, titleOnly })));
      res(null);
    });
  });
  // const files = await readdir('.');
  // await showFileContent({
  //   name: 'README.md',
  //   full: options?.full,
  // });
};

export default showMarkdownFiles;
