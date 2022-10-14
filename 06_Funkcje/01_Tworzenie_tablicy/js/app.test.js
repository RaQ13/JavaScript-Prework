import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("Create an array", function () {
  ESLintTest(__dirname);

  let app, task, createArray;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    createArray = getVariable(app, "createArray");
  });

  test(`Function has been created`, () => {
    expect(createArray, "Probably you have not used proper name of function (createArray).").toBeFunction();
  });

  test(`Function is taking parameter "rows"`, () => {
    expect(task.functions[0]?.params).toEqual(["rows"]);
  });

  test(`Function is using "return" keyword`, () => {
    expect(task.functions[0]?.void, `You have not used "return" inside function.`).toBeFalse();
  });

  test(`Result of function is array of numbers from 1 to 5`, () => {
    const r = createArray(5);
    const c = new Array(5).fill(0).map((v, i) => i + 1);
    expect(r).toEqual(c);
  });
});
