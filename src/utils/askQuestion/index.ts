import { createInterface } from "readline";

const askQuestion = (query: string) => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<string>((resolve) =>
    rl.question(query, (ans: string) => {
      rl.close();
      resolve(ans);
    })
  );
};

export default askQuestion;
