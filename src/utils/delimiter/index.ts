const delimiter = () => {
  console.log(
    Array.from({ length: 60 })
      .map(() => "-")
      .join("")
  );
};

export default delimiter;
