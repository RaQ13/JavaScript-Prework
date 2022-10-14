import { ESLintTest, parse, getVariable, rewire } from "utils";

describe("Variables", () => {
  ESLintTest(__dirname);

  let app, task;
  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
  });

  const cases = [{ variable: "a" }, { variable: "b" }, { variable: "c" }];

  cases.forEach(({ variable }) => {
    test(`Variable "${variable}" is defined and printed`, () => {
      const v = getVariable(app, variable);
      expect(v, `You have to define "${variable}" variable.`).toBeDefined();
      expect(task.variables[variable].isLogged, `You have to print "${variable}" using console.log.`).toBeTrue();
    });
  });
});
