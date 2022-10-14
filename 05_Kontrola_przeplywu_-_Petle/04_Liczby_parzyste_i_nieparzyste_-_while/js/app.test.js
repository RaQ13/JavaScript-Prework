import { ESLintTest, getVariable, parse, rewire } from "utils";
import {correctCounterIncrementing, correctInitValue} from "utils/tests/whileLoop";
import {correctCondition} from "utils/tests/loops";
import {correctEvenOddPrinting, correctIfConditions} from "utils/tests/evenOddPrinting";

describe("Even and Odd - while", function () {
  ESLintTest(__dirname);

  let task, whileStatement, app, n, ifStatements;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    whileStatement = task.statements.while[0];
    n = getVariable(app, "n");
    ifStatements = whileStatement.body.statements.if;
  });

  describe(`For statement`, () => {
    test(`Has correct init value`, () => {
      correctInitValue(task.variables.i, 0);
    });

    test(`Has correct condition`, () => {
      correctCondition(whileStatement, "i <= n")
    });

    test(`Is incrementing "i" variable by one`, () => {
      correctCounterIncrementing(whileStatement);
    });
  });

  test(`If statement/s is/are inside for statement`, () => {
    expect(whileStatement.body.statements.if.length).toBeGreaterThan(0);
  });

  test(`If statement has correct condition`, () => {
    correctIfConditions(ifStatements);
  });

  test(`Correct values are printed`, () => {
    correctEvenOddPrinting(ifStatements);
  });
});
