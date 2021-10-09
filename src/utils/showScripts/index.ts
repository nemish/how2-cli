import { yellow, red } from 'chalk';
import emptyLine from '../emptyLine';
import delimiter from '../delimiter';
import doReadFile from '../doReadFile';
import readPackageJson from '../readPackageJson';

const showScripts = async (items?: any) => {
  emptyLine();
  console.log(yellow('package.json scripts'));
  delimiter();
  emptyLine();
  if (!items) {
    const { scripts } = await readPackageJson();
    console.log(scripts || 'No scripts');
  } else {
    console.log(items);
  }
  emptyLine();
  delimiter();
  emptyLine(3);
};

export default showScripts;
