import { grey, red } from "chalk";
import emptyLine from "../emptyLine";
import delimiter from "../delimiter";
import doReadFile from "../doReadFile";

const showScripts = async () => {
  emptyLine();
  console.log(grey("package.json scripts"));
  delimiter();
  emptyLine();
  await doReadFile({
    filename: "package.json",
  })
    .then((data) => {
      if (typeof data === "string") {
        const config = JSON.parse(data);
        console.log(config.scripts || "No scripts");
        return;
      }
      console.log("package.json", data.toJSON());
    })
    .catch((err) => console.log(red("There is no package.json file")));
  emptyLine();
  delimiter();
  emptyLine(3);
};

export default showScripts;
