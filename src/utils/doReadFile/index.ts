import { readFile } from "fs";

type Args = {
  filename: string;
};

const doReadFile = async ({ filename }: Args) => {
  return await new Promise<string | Buffer>((res, rej) => {
    readFile(filename, "utf-8", (err: any, data: string | Buffer): void => {
      if (err) {
        return rej(err);
      }
      return res(data);
    });
  });
};

export default doReadFile;
