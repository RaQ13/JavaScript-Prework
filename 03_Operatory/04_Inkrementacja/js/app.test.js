import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("Incrementing", function () {
  ESLintTest(__dirname);

  let app, task, finalValue;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    finalValue = getVariable(app, "finalValue");
  });

  test(`Variable "startValue" has assigned value 10`, () => {
    expect(task.variables.startValue.assignedValue).toBe(10);
  });

  test(`Variable "startValue" has been incremented`, () => {
    expect(task.variables.startValue.usedExpressions).toIncludeSameMembers([
      {
        prefix: false,
        operator: "++",
      },
    ]);
  });

  test(`Variable "finalValue" is copy of "startValue" and has value of 11 and is logged`, () => {
    expect(finalValue).toBe(11);
    expect(task.variables.finalValue.assignedValue).toBe("startValue");
    expect(task.variables.finalValue.isLogged, "You have to use console.log.").toBeTrue();
  });
});
