type Args = {
  symbol?: string;
};

const getDelimiterString = (options?: Args) => {
  return Array.from({ length: 30 })
    .map(() => options?.symbol || '-')
    .join('');
};

export default getDelimiterString;
