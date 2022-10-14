import { ESLintTest, getVariable, parse, rewire } from "utils";
import * as _ from "lodash";
import "console-testing-library";

const print2DArray = DEV_MODE ? require("../../solution/js/app") : require("./app");

describe("Print an 2D array", function () {
  ESLintTest(__dirname);

  let app, task, fn, outerForStatement, users, innerForStatement;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    users = getVariable(app, "users");
    fn = task.functions?.[0];
    outerForStatement = fn.body.statements.for?.[0];
    innerForStatement = outerForStatement.body.statements.for?.[0];
  });

  test(`Function has been created`, () => {
    expect(print2DArray, "Probably you have not used proper name of function (printArray).").toBeFunction();
  });

  test(`Function is taking parameter "array"`, () => {
    expect(fn.params).toEqual(["array"]);
  });

  test(`Function is not using "return" keyword`, () => {
    expect(fn.void, `In this task you should print (console.log) data instead of returning it.`).toBeTrue();
  });

  test(`Outer for statement inside function is operating on "array" variable`, () => {
    expect(outerForStatement, "You have not used for statement inside function.").toBeObject();
    expect(outerForStatement.test, `You have to use "array" variable inside function.`).toContain("array");
  });

  test(`Inner for statement inside function is operating on "array" variable`, () => {
    expect(innerForStatement.test, `You have to use "array" variable inside function.`).toContain("array");
  });

  test(`Console output is showing list of names`, () => {
    expect(
      innerForStatement.body.variables.array,
      `You have not used "array" variable inside console.log method.`
    ).toBeObject();
    expect(innerForStatement.body.variables.array.isLogged).toIncludeSameMembers(["array[i][j]"]);

    if (_.isFunction(print2DArray)) print2DArray(users);
    expect(_.flattenDeep(console.log.mock.calls)).toEqual(_.flatten(users));
  });
});
