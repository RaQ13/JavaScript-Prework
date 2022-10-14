import { ESLintTest, getVariable, parse, rewire } from "utils";
import {correctCounterIncrementing, correctInitValue} from "utils/tests/whileLoop";
import {correctCondition} from "utils/tests/loops";

describe("Create Array - while", function () {
  ESLintTest(__dirname);

  let task, whileStatement, app, numbers, n, i;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    whileStatement = task.statements.while[0];
    numbers = getVariable(app, "numbers");
    n = getVariable(app, "n");
    i = getVariable(app, "i");
  });

  describe(`While statement`, () => {
    test(`Counter value has been prepared`, () => {
      correctInitValue(whileStatement, 1);
    });

    test(`Has correct condition`, () => {
      correctCondition(whileStatement, "i <= n");
    });

    test(`Is incrementing "i" variable by one`, () => {
      correctCounterIncrementing(whileStatement);
    });
  });

  describe(`Array of numbers`, () => {
    test(`Is filled with "i" values inside for statement`, () => {
      expect(whileStatement.body.variables?.numbers).toContainEntry(["pushedValues", ["i"]]);
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
