import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("Variables", function () {
  ESLintTest(__dirname);

  let app, task;
  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
  });

  const cases = [
    { type: "number", variable: "numberValue", expectFn: "toBeNumber" },
    { type: "string", variable: "stringValue", expectFn: "toBeString" },
    {
      type: "string",
      variable: "mixedValue",
      expectFn: "toBeString",
      nextTest: function () {
        test("Concatenation is used", () => {
          expect(task.variables.mixedValue.isConcatenated, "You should concatenate two values.").toBe(true);
        });
      },
    },
    { type: "boolean", variable: "logicValue", expectFn: "toBeBoolean" },
    { type: "object", variable: "nullValue", expectFn: "toBeNull" },
  ];

  cases.forEach(({ type, variable, expectFn, nextTest }) => {
    describe(`Variable "${variable}"`, () => {
      test(`Is ${type}`, () => {
        const v = getVariable(app, variable);
        expect(v)[expectFn]();
      });

      test("Is printed", () => {
        expect(task.variables?.[variable]?.isLogged, `You have to print "${variable}" using console.log.`).toBeTrue();
      });

      test("Is checked type with typeof", () => {
        expect(
          task.variables?.[variable]?.isUsedTypeOf,
          `You have to check and print (console.log) type of "${variable}" with typeof expression.`
        ).toBeTrue();
      });

      if (typeof nextTest === "function") {
        nextTest();
      }
    });
  });
});
