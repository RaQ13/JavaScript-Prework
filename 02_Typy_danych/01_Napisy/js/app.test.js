import { ESLintTest, getVariable, parse, rewire } from "utils";
import "console-testing-library";

describe("Strings", function () {
  ESLintTest(__dirname);

  let app, task, greeting, technology, result;
  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    greeting = getVariable(app, "greeting");
    technology = getVariable(app, "technology");
    result = getVariable(app, "result");
  });

  test(`Variable "greeting" has value "Hello"`, () => {
    expect(greeting).toBe("Hello");
  });

  test(`Variable "technology" has value "JS"`, () => {
    expect(technology).toBe("JS");
  });

  describe(`Variable "result"`, () => {
    test(`Has value "Hello JS"`, () => {
      expect(result).toBe("Hello JS");
    });

    test(`Is result of concatenating`, () => {
      expect(task.variables.result.isConcatenated).toBeTrue();
      expect(task.variables.result.value).toBe(`greeting + " " + technology`);
    });

    test(`Is printed`, () => {
      expect(task.variables.result.isLogged).toBeTrue();
    });
  });
});
