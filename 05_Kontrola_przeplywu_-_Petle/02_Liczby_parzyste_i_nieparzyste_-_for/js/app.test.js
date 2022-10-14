import { ESLintTest, getVariable, parse, rewire } from "utils";
import { correctCounterIncrementing, correctInitValue } from "utils/tests/forLoop";
import { correctCondition } from "utils/tests/loops";
import { correctEvenOddPrinting, correctIfConditions } from "utils/tests/evenOddPrinting";

describe("Even and Odd - for", function () {
  ESLintTest(__dirname);

  let task, forStatement, app, n, ifStatements;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    forStatement = task.statements.for[0];
    n = getVariable(app, "n");
    ifStatements = forStatement.body.statements.if;
  });

  describe(`For statement`, () => {
    test(`Has correct init value`, () => {
      correctInitValue(forStatement, 0);
    });

    test(`Has correct condition`, () => {
      correctCondition(forStatement, "i <= n");
    });

    test(`Is incrementing "i" variable by one`, () => {
      correctCounterIncrementing(forStatement);
    });
  });

  test(`If statement/s is/are inside for statement`, () => {
    expect(forStatement.body.statements.if.length).toBeGreaterThan(0);
  });

  test(`If statement has correct condition`, () => {
    correctIfConditions(ifStatements);
  });

  test(`Correct values are printed`, () => {
    correctEvenOddPrinting(ifStatements);
  });
});
