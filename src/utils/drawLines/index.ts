import terminalSize from '../termSize';

type Args = {
  lines: string[];
};

const drawLines = ({ lines }: Args) => {
  const { rows } = terminalSize();
  const linesCount = rows - 10;
  console.log(lines.slice(0, linesCount).join('\n'));
};

export default drawLines;
