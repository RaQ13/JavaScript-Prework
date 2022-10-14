import { ESLintTest, getVariable, importTaskFile, parse, rewire } from "utils";
import "console-testing-library";
import * as _ from "lodash";

describe("Stars", function () {
  ESLintTest(__dirname);

  let n, resultCalc, resultLog, app, calc, task, rowsLoop, columnsLoop;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    n = getVariable(app, "n");
    calc = getVariable(app, "calc");
    rowsLoop = [...task.statements.for];
    columnsLoop = [...rowsLoop[0]?.body.statements.for];

    resultCalc = new Array(n)
      .fill([])
      .map((row, i) => new Array(i + 1).fill(null).map(() => "*"));

    resultLog = resultCalc.map((v) => v.join(""));
  });

  test(`Starting variables are not modified`, () => {
    expect(n).not.toBeLessThan(5);
  });

  test(`Loop (for) statements were used`, () => {
    expect([...rowsLoop, ...columnsLoop], "You have to use two for statements in this task.").toBeArrayOfSize(2);
  });

  test(`Used nested dependent for loops`, () => {
    const initVar = _.flatMapDeep(rowsLoop[0].init)[0].name;
    expect(columnsLoop[0].test.includes(initVar), "You have not used nested and dependent(!) for loops.").toBeTrue();
  })

  test(`Used console.log prints correct result`, () => {
    importTaskFile(__dirname);
    expect(_.flattenDeep(console.log.mock.calls), `Every row need to be printed separately.`).toIncludeAnyMembers(resultLog);
  });
});
