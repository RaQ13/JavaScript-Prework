import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("Create 2D array of numbers", function () {
  ESLintTest(__dirname);

  let rows, columns, app, numbers, task;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    numbers = getVariable(app, "numbers");
    rows = getVariable(app, "rows");
    columns = getVariable(app, "columns");
  });

  test(`Variables "row" and "columns" are not modified`, () => {
    expect(rows).toEqual(5);
    expect(columns).toEqual(4);
  });

  describe(`Variable "numbers"`, () => {
    test(`Contains correct amount of rows`, () => {
      expect(numbers.length).toEqual(rows);
    });

    test(`Each row contains correct amount of columns`, () => {
      expect(numbers).toSatisfyAll((x) => x.length === columns);
    });

    test(`Is filled with correct numbers`, () => {
      expect(numbers).toEqual([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
        [17, 18, 19, 20],
      ]);
    });
  });

  test(`Loop (for/while) statements were used`, () => {
    const rowsLoop = [...task.statements.for, ...task.statements.while];
    const columnsLoop = [...rowsLoop[0]?.body.statements.for, ...rowsLoop[0]?.body.statements.while]

    expect(rowsLoop, "You have to use for or while statement to create rows.").toBeArrayOfSize(1);
    expect(columnsLoop, "You have to use for or while statement to create columns.").toBeArrayOfSize(1);
  });
});
