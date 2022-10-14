import { ESLintTest, getVariable, importTaskFile, parse, rewire } from "utils";
import { correctCounterIncrementing, correctInitValue } from "utils/tests/forLoop";
import { correctCondition } from "utils/tests/loops";
import "console-testing-library";
import * as _ from "lodash";

describe("Print 2D array of numbers", function () {
  ESLintTest(__dirname);

  let task, outerForStatement, innerForStatement, app, numbers;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    outerForStatement = task.statements.for[0];
    innerForStatement = outerForStatement.body.statements.for[0];
    numbers = getVariable(app, "numbers");
  });

  // Test Outer For Loop
  describe(`Outer for statement`, () => {
    test(`Has correct init value`, () => {
      correctInitValue(outerForStatement, 0);
    });

    test(`Has correct condition`, () => {
      correctCondition(
        outerForStatement,
        "i < numbers.length",
        `You should operate between "i" and total length of "numbers" array exclusively(!), because array is indexed from "0", it's last index is one smaller than total length.`
      );
    });

    test(`Is incrementing "i" variable by one`, () => {
      correctCounterIncrementing(outerForStatement);
    });
  });

  // Test Inner For Loop
  describe(`Inner for statement`, () => {
    test(`Has correct init value`, () => {
      correctInitValue(innerForStatement, 0, "j");
    });

    test(`Has correct condition`, () => {
      correctCondition(
        innerForStatement,
        "j < numbers[i].length",
        `You should operate between "j" and total length of "numbers[i]" array exclusively(!), because array is indexed from "0", it's last index is one smaller than total length.`
      );
    });

    test(`Is incrementing "j" variable by one`, () => {
      correctCounterIncrementing(innerForStatement, "j");
    });
  });

  test(`Variable "numbers" is not modified`, () => {
    expect(numbers).toBeArrayOfSize(3);
    expect(numbers).toEqual([
      [16, 32, 2048],
      [64, 256, 1024],
      [8, 2, 4],
    ]);
  });

  test(`console.log is used inside for statements`, () => {
    expect(innerForStatement.body.variables.numbers.isLogged[0]).toBe("numbers[i][j]");
  });

  test(`console.log output is showing numbers from 1 to 9`, () => {
    importTaskFile(__dirname);
    expect(console.log).toHaveBeenCalledTimes(9);
    expect(_.flatten(console.log.mock.calls)).toEqual([16, 32, 2048, 64, 256, 1024, 8, 2, 4]);
  });
});
