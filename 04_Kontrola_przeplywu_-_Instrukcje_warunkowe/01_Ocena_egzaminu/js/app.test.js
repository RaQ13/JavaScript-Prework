import { ESLintTest, parse } from "utils";

describe("Exam score", function () {
  ESLintTest(__dirname);

  let task;

  beforeAll(() => {
    task = parse(__dirname);
  });

  test(`If statement contains correct condition`, () => {
    expect(task.statements.if[0], "Provided condition is wrong.").toContainEntry([
      "condition",
      "studentScore > passingScore",
    ]);
  });

  test(`"Exam passed" is printed in correct place`, () => {
    expect(task.statements.if[0].consequent, `You should place console.log inside true if block`).toContainEntry([
      "consoleLogs",
      ["Exam passed"],
    ]);
  });

  test(`"Exam failed" is printed in correct place`, () => {
    expect(task.statements.if[0].alternate, `You should place console.log inside false if block`).toContainEntry([
      "consoleLogs",
      ["Exam failed"],
    ]);
  });
});
