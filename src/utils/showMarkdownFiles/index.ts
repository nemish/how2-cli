import showFileContent from '../showFileContent';
import showFileTitle from '../showFileTitle';
import { readdir } from 'fs';
import { bgYellow } from 'chalk';
import getMarkdownFiles from '../getMarkdownFiles';
import { title } from 'process';

type Args = {
  titleOnly?: boolean;
  full?: boolean;
};

type HandleFileArgs = {
  name: string;
  titleOnly: boolean;
};

const handleFile = async ({ name, titleOnly }: HandleFileArgs) => {
  if (titleOnly) {
    await showFileContent({ name, linesCount: 2 });
    return;
  }
  await showFileContent({
    name,
  });
};

const showMarkdownFiles = async (options?: Args) => {
  const titleOnly = !!options?.titleOnly;
  const files = await getMarkdownFiles();
  if (!files) {
    return;
  }
  return await Promise.all(
    files.map((name: string) => handleFile({ name, titleOnly })),
  );
};

export default showMarkdownFiles;
