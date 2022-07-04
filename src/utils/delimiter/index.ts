import getDelimiterString from '../getDelimiterString';

type Args = {
  symbol?: string;
};

const delimiter = (options?: Args) => {
  console.log(getDelimiterString(options));
};

export default delimiter;
