import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("2D arrays", function () {
  ESLintTest(__dirname);

  let app, task;
  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
  });

  describe("Part 1", () => {
    test('Array "numbers" is defined and filled with numbers', () => {
      const v = getVariable(app, "numbers");
      const expected = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ];
      expect(v).toIncludeSameMembers(expected);
    });

    test("Second element from first row of array is printed", () => {
      expect(task.variables?.numbers?.isLogged).toContain("numbers[0][1]");
    });

    test("Second row of array is printed", () => {
      expect(task.variables?.numbers?.isLogged).toContain("numbers[1]");
    });

    test("Length of third row of array is printed", () => {
      expect(task.variables?.numbers?.isLogged, "You have to use length property of an array.").toContain(
        "numbers[2].length"
      );
    });
  });

  describe("Part 2", () => {
    test('Array "mixedValues" is defined and filled with names and numbers', () => {
      const v = getVariable(app, "mixedValues");
      const expected = [
        ["Keli", "Walter", "Heriberto"],
        [1, 2, 3, 4, 5, 6],
      ];
      expect(v).toIncludeSameMembers(expected);
    });

    test("Third element from first row of array is printed", () => {
      expect(task.variables?.mixedValues?.isLogged).toContain("mixedValues[0][2]");
    });

    test("Fifth element from second row of array is printed", () => {
      expect(task.variables?.mixedValues?.isLogged).toContain("mixedValues[1][4]");
    });

    test("Length of second row of array is printed", () => {
      expect(task.variables?.mixedValues?.isLogged, "You have to use length property of an array.").toContain(
        "mixedValues[1].length"
      );
    });
  });
});
