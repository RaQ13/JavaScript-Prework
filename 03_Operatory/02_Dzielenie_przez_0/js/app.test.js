import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("Dividing by zero", function () {
  ESLintTest(__dirname);

  let app, task, divideByZero;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    divideByZero = getVariable(app, "divideByZero");
  });

  test(`Variable "divideByZero" has value Infinity and is logged`, () => {
    expect(divideByZero).toBe(Infinity);
    expect(task.variables.divideByZero.value).toBe("3 / 0");
    expect(task.variables.divideByZero.isLogged).toBeTrue();
  });
});
