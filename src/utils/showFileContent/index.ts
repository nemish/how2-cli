import getFileContentLines from '../getFileContentLines';

type Args = {
  full?: boolean;
  name: string;
  linesCount?: number;
};

const showFileContent = async ({ name, full, linesCount }: Args) => {
  const lines: any = await getFileContentLines({ name, full, linesCount });
  console.log(lines.join('\n'));
};

export default showFileContent;
