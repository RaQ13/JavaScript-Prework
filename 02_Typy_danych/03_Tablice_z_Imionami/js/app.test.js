import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("Arrays with names", function () {
  ESLintTest(__dirname);

  let app, task;
  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
  });

  describe("Part 1", () => {
    test('Array "users" is defined and filled with names', () => {
      const v = getVariable(app, "users");
      const expected = ["John", "Marie", "Kate", "Paul", "Steven"];
      expect(v).toIncludeSameMembers(expected);
    });

    test("Second element of array is printed", () => {
      expect(task.variables?.users?.isLogged).toContain("users[1]");
    });

    test("Fifth element of array is printed", () => {
      expect(task.variables?.users?.isLogged).toContain("users[4]");
    });

    test("Length of array is printed", () => {
      expect(task.variables?.users?.isLogged, "You have to use length property of an array.").toContain("users.length");
    });
  });

  describe("Part 2", () => {
    test('Array "guests" is defined and is empty', () => {
      expect(task.variables?.guests?.value).toBeArrayOfSize(0);
    });

    test("Names added one-by-one with push method", () => {
      const expected = ["Chauncey", "Ling", "Ona", "Nicole", "Michaele"];
      expect(task.variables?.guests?.pushedValues, "You have to use push method.").toIncludeSameMembers(expected);
    });

    test("First element of array is printed", () => {
      expect(task.variables?.guests?.isLogged).toContain("guests[0]");
    });

    test("Third element of array is printed", () => {
      expect(task.variables?.guests?.isLogged).toContain("guests[2]");
    });

    test("Length of array is printed", () => {
      expect(task.variables?.guests?.isLogged, "You have to use length property of an array.").toContain(
        "guests.length"
      );
    });
  });
});
