import { ESLintTest, parse } from "utils";

describe("Letter grade", function () {
  ESLintTest(__dirname);

  let task, switchStatement;

  beforeAll(() => {
    task = parse(__dirname);
    switchStatement = task.statements.switch[0];
  });

  test("Switch statement is used", () => {
    expect(switchStatement).toBeDefined();
  });

  test(`Switch is using "grade" variable`, () => {
    expect(switchStatement.discriminant).toBe("grade");
  });

  test("Cases printing correct values", () => {
    const valuesFromConsoleLogs = switchStatement.cases.map((el) => [el.test, el.consequent.consoleLogs[0]]);
    expect(valuesFromConsoleLogs).toIncludeSameMembers([
      [6, "A"],
      [5, "B"],
      [4, "C"],
      [3, "D"],
      [2, "E"],
      [1, "F"],
    ]);
  });

  test(`Used "break" statement in every case`, () => {
    const isUsedBreak = (el) => el.consequent.statements.break.length === 1;
    expect(switchStatement.cases, `You have missed some "break" statement.`).toSatisfyAll(isUsedBreak);
  });
});
