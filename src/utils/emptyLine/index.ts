const emptyLine = (number?: number) => {
  Array.from({
    length: number || 1,
  }).forEach(() => {
    console.log("");
  });
};

export default emptyLine;
