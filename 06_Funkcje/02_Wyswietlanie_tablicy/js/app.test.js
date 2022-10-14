import { ESLintTest, getVariable, parse, rewire } from "utils";
import * as _ from "lodash";
import "console-testing-library";

const printArray = DEV_MODE ? require("../../solution/js/app") : require("./app");

describe("Print an array", function () {
  ESLintTest(__dirname);

  let app, task, fn, forStatement, people, log;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    people = getVariable(app, "people");
    fn = task.functions?.[0];
    forStatement = fn.body.statements.for?.[0];
  });

  test(`Function has been created`, () => {
    expect(printArray, "Probably you have not used proper name of function (printArray).").toBeFunction();
  });

  test(`Function is taking parameter "array"`, () => {
    expect(fn.params).toEqual(["array"]);
  });

  test(`Function is not using "return" keyword`, () => {
    expect(fn.void, `In this task you should print (console.log) data instead of returning it.`).toBeTrue();
  });

  test(`For statement inside function is operating on "array" variable`, () => {
    expect(forStatement, "You have not used for statement inside function.").toBeObject();
    expect(forStatement.test, `You have to use "array" variable inside function.`).toContain("array");
  });

  test(`Console output is showing list of names`, () => {
    expect(
      forStatement.body.variables.array,
      `You have not used "array" variable inside console.log method.`
    ).toBeObject();
    expect(forStatement.body.variables.array.isLogged).toIncludeSameMembers(["array[i]"]);

    if (_.isFunction(printArray)) printArray(people);
    expect(_.flattenDeep(console.log.mock.calls)).toEqual(people);
  });
});
