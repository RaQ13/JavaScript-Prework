import { ESLintTest, getVariable, parse, rewire } from "utils";

const f = (a) => {
  for (let i = 0; i < a.length; i++) if (a.indexOf(a[i], i + 1) > 0) return i;
};

describe("Repeated values", function () {
  ESLintTest(__dirname);

  let app, task, fn, array, indexOfRepeatedValue, repeatedValueIndex;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    array = getVariable(app, "numbers");
    indexOfRepeatedValue = getVariable(app, "indexOfRepeatedValue");
    repeatedValueIndex = f(array);
    fn = task.functions?.[0];
  });

  test(`Function has been created`, () => {
    expect(indexOfRepeatedValue, "Probably you have not used proper name of function (printArray).").toBeFunction();
  });

  test(`Function is taking parameter "array"`, () => {
    expect(fn.params).toEqual(["array"]);
  });

  test(`Function is using "return" keyword`, () => {
    expect(fn.void, `In this task you should use "return" keyword inside function.`).toBeFalse();
  });

  test(`Function is returning correct value`, () => {
    expect(indexOfRepeatedValue(array)).toEqual(repeatedValueIndex);
  });

  test(`Inside function is declared "firstIndex" variable`, () => {
    expect(fn.body.variables?.firstIndex).toBeObject();
  });

  test(`Variable "firstIndex" is printed in console`, () => {
    expect(fn.body.variables?.firstIndex.isLogged).toBeTrue();
  });
});
