import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("Max from array", function () {
  ESLintTest(__dirname);

  let app, task, fn, randomNumbers, maxNumber, maxFromArray;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    randomNumbers = getVariable(app, "randomNumbers");
    maxFromArray = getVariable(app, "maxFromArray");
    maxNumber = [...randomNumbers].sort((a, b) => b - a)[0];
    fn = task.functions?.[0];
  });

  test(`Function has been created`, () => {
    expect(maxFromArray, "Probably you have not used proper name of function (printArray).").toBeFunction();
  });

  test(`Function is taking parameter "numbers"`, () => {
    expect(fn.params).toEqual(["numbers"]);
  });

  test(`Function is using "return" keyword`, () => {
    expect(fn.void, `In this task you should use "return" keyword inside function.`).toBeFalse();
  });

  test(`Function is returning correct value`, () => {
    expect(maxFromArray(randomNumbers)).toEqual(maxNumber);
  });

  test(`Result of function is saved in "result" variable`, () => {
    expect(task.variables.result.value).toBe("maxFromArray(randomNumbers)");
  });

  test(`Variable "result" is printed in console`, () => {
    expect(task.variables.result.isLogged).toBeTrue();
  });
});
