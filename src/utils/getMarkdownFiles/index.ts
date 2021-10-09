import showFileContent from '../showFileContent';
import showFileTitle from '../showFileTitle';
import { readdir } from 'fs';
import { bgYellow } from 'chalk';

const getMarkdownFiles = async (): Promise<any[]> => {
  return new Promise((res, rej) => {
    readdir('.', async (err, files) => {
      if (err) {
        return;
      }
      return res(files.filter((name) => name.toLowerCase().endsWith('.md')));
    });
  });
};

export default getMarkdownFiles;
