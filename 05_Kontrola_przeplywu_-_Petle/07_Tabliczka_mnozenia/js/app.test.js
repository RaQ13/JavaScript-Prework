import { ESLintTest, getVariable, importTaskFile, parse, rewire } from "utils";
import "console-testing-library";
import * as _ from "lodash";

describe("Multiplication table", function () {
  ESLintTest(__dirname);

  let n, resultCalc, resultLog, app, calc, task;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    n = getVariable(app, "n");
    calc = getVariable(app, "calc");

    resultCalc = new Array(n)
      .fill([])
      .map((row, i) => new Array(n).fill([]).map((column, j) => i + 1 + " * " + (j + 1) + " = " + (i + 1) * (j + 1)));

    resultLog = resultCalc.map((v) => v.join(" | "));
  });

  test(`Starting variables are not modified`, () => {
    expect(n).not.toBeLessThan(3);
    expect(task.variables.calc.value).toEqual([]);
  });

  describe(`Variable "calc"`, () => {
    test(`Contains correct amount of rows`, () => {
      expect(calc.length).toEqual(n);
    });

    test(`Each row contains correct amount of elements`, () => {
      expect(calc).toSatisfyAll((x) => x.length === n);
    });

    test(`Is filled with correct values`, () => {
      expect(calc).toSatisfyAll(
        (x, i) => x.every((y, j) => y === resultCalc[i][j]),
        `Some elements in "calc" array are wrong.`
      );
    });
  });

  test(`Loop (for/while) statements were used`, () => {
    const rowsLoop = [...task.statements.for, ...task.statements.while];
    const columnsLoop = [...rowsLoop[0]?.body.statements.for, ...rowsLoop[0]?.body.statements.while];
    expect([...rowsLoop, ...columnsLoop], "You have to use for or while statement in this task.").toBeArray();
  });

  test(`Used console.log prints correct result`, () => {
    importTaskFile(__dirname);
    expect(_.flattenDeep(console.log.mock.calls), `Every row need to be printed separately.`).toIncludeAnyMembers(resultLog);
  });
});
