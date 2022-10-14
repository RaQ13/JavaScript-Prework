import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("break", function () {
  ESLintTest(__dirname);

  let i, app, task, whileStatement, ifStatement;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    i = getVariable(app, "i");
    whileStatement = task.statements.while[0];
    ifStatement = whileStatement.body.statements.if[0];
  });

  test(`Variable "i" is not modified`, () => {
    expect(task.variables.i.value).toEqual(0);
  });

  test(`While statement was used`, () => {
    expect(whileStatement, "You have to use while statement in this task.").toBeObject();
  });

  test(`Correct condition in loop`, () => {
    expect(ifStatement.condition).toEqual("i === 5");
  });

  test(`Used break statement`, () => {
    expect(ifStatement.consequent.statements.break).toBeArray();
  });

  test(`Final value of "i" equals 5`, () => {
    expect(i).toEqual(5);
  });
});
