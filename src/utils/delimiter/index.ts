type Args = {
  symbol?: string;
};

const delimiter = (options?: Args) => {
  console.log(
    Array.from({ length: 30 })
      .map(() => options?.symbol || '-')
      .join(''),
  );
};

export default delimiter;
