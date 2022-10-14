import { ESLintTest, getVariable, parse, rewire } from "utils";
import { correctCounterIncrementing, correctInitValue } from "utils/tests/forLoop";
import { correctCondition } from "utils/tests/loops";

describe("Create Array - for", function () {
  ESLintTest(__dirname);

  let task, forStatement, app, numbers, n;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    forStatement = task.statements.for[0];
    numbers = getVariable(app, "numbers");
    n = getVariable(app, "n");
  });

  describe(`For statement`, () => {
    test(`Has correct init value`, () => {
      correctInitValue(forStatement, 1);
    });

    test(`Has correct condition`, () => {
      correctCondition(forStatement, "i <= n");
    });

    test(`Is incrementing "i" variable by one`, () => {
      correctCounterIncrementing(forStatement);
    });
  });

  describe(`Array of numbers`, () => {
    test(`Is filled with "i" values inside for statement`, () => {
      expect(forStatement.body.variables?.numbers).toContainEntry(["pushedValues", ["i"]]);
    });

    test(`Variable "n" is greater then 0`, () => {
      expect(n).toBeGreaterThan(0);
    });

    test(`Final length equals "n" value`, () => {
      expect(numbers).toBeArrayOfSize(n);
    });

    test(`Contains correct numbers`, () => {
      expect(numbers).toIncludeAllMembers([new Array(n)].map((value, index) => index + 1));
    });
  });
});
