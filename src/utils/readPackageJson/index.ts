import { grey, red } from 'chalk';
import emptyLine from '../emptyLine';
import delimiter from '../delimiter';
import doReadFile from '../doReadFile';

const readPackageJson = async (): Promise<any> => {
  return await doReadFile({
    filename: 'package.json',
  })
    .then((data) => {
      if (typeof data === 'string') {
        return JSON.parse(data);
      }
      return data.toJSON();
    })
    .catch((err) => console.log(red('There is no package.json file')));
};

export default readPackageJson;
