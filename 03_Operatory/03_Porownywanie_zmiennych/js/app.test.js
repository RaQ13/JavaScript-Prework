import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("Variables comparison", function () {
  ESLintTest(__dirname);

  let app, task, numberAsNumber, numberAsString, equalValueAndType, equalValue;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    numberAsNumber = getVariable(app, "numberAsNumber");
    numberAsString = getVariable(app, "numberAsString");
    equalValueAndType = getVariable(app, "equalValueAndType");
    equalValue = getVariable(app, "equalValue");
  });

  test(`Variable "numberAsNumber" has value 12 (number)`, () => {
    expect(numberAsNumber).toBe(12);
  });

  test(`Variable "numberAsString" has value 12 (string)`, () => {
    expect(numberAsString).toBe("12");
  });

  test(`Variable "equalValueAndType" has value false and is logged`, () => {
    expect(equalValueAndType).toBeFalse();
    expect(task.variables.equalValueAndType.value, "You have used wrong comparison operator.").toIncludeMultiple([
      "numberAsNumber",
      "===",
      "numberAsString",
    ]);
    expect(task.variables.equalValueAndType.isLogged, "You have to use console.log.").toBeTrue();
  });

  test(`Variable "equalValue" has value true and is logged`, () => {
    expect(equalValue).toBeTrue();
    expect(task.variables.equalValue.value, "You have used wrong comparison operator.").toIncludeMultiple([
      "numberAsNumber",
      "==",
      "numberAsString",
    ]);
    expect(task.variables.equalValue.isLogged, "You have to use console.log.").toBeTrue();
  });
});
