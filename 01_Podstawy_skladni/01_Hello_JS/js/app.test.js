import { ESLintTest, importTaskFile } from "utils";
import "console-testing-library";

describe("Hello JS", function () {
  ESLintTest(__dirname);

  test("console.log is printing 'Hello JS'", () => {
    importTaskFile(__dirname, "app.js");
    expect(console.log).toHaveBeenCalledWith("Hello JS");
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
