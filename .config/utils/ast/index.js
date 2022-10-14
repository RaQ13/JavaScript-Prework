import espree from "espree";
import { functionDeclaration, variableDeclaration } from "./declarations";
import { forStatement, ifStatement, switchStatement, whileStatement } from "./statements";
import { assignmentExpression, binaryExpression, updateExpression } from "./expressions";
import * as _ from "lodash";
import { variableChange } from "./declarations/variableDeclaration";

const getTaskFileInString = (dirname, filename) => {
  const path = require("path");
  const fs = require("fs");
  return fs.readFileSync(path.join(dirname, taskDirectory(), filename)).toString();
};

const parseBody = (body) => {
  const result = {
    variables: {},
    functions: [],
    consoleLogs: [],
    statements: {
      if: [],
      while: [],
      for: [],
      switch: [],
      break: [],
    },
  };

  body.forEach((el) => {
    const { type, expression } = el;

    // Variable is declared
    if (type === "VariableDeclaration") {
      result.variables = {
        ...result.variables,
        ...variableDeclaration(el),
      };
    }

    // Function is declared
    if (type === "FunctionDeclaration") {
      result.functions.push(functionDeclaration(el));
    }

    if (type === "IfStatement") {
      result.statements.if.push(ifStatement(el));
    }

    if (type === "ForStatement") {
      result.statements.for.push(forStatement(el));
    }

    if (type === "WhileStatement") {
      result.statements.while.push(whileStatement(el));
    }

    if (type === "SwitchStatement") {
      result.statements.switch.push(switchStatement(el));
    }

    if (type === "BreakStatement") {
      result.statements.break.push([el.start, el.end]);
    }

    if (type === "ExpressionStatement") {
      const { type } = expression;
      const object = expression?.callee?.object;
      const property = expression?.callee?.property;
      const args = expression?.arguments;

      /**
       * @++/-- expression (increment/decrement)
       */
      if (type === "UpdateExpression") {
        const r = updateExpression(expression);

        /**
         * If variable is not available
         * VariableDeclaration is outside current block
         * ex. counter "i" is modified inside while loop
         */
        variableChange(result.variables, r.name, (variable) => {
          variable.usedExpressions.push(r);
        });
      }

      /**
       * AssignmentExpression
       * a = 10;
       * b = a;
       */
      if (type === "AssignmentExpression") {
        assignmentExpression(result.variables, expression);
      }

      if (typeof args !== "undefined" && args.length > 0) {
        args.forEach((arg) => {
          /**
           * @push expressions
           */
          if (type === "CallExpression" && property?.name === "push") {
            const variable = object.name;

            /**
             * If variable is not available
             * ex. array is modified inside for loop - declaration is outside this loop
             * but modification inside (two different blocks)
             */
            variableChange(result.variables, variable, (variable) => {
              variable.pushedValues.push(arg.value || arg.name);
            });
          }

          /**
           * @console.log expressions
           */
          if (type === "CallExpression" && object?.name === "console" && property?.name === "log") {
            if (arg.type !== "Literal") {
              const variable = arg?.name || arg?.argument?.name || arg?.object?.name || arg?.object?.object?.name;

              // If BinaryExpression was used
              if (arg.type === "BinaryExpression") {
                result.consoleLogs.push(binaryExpression(arg));
              }


              // If typeof expression was used
              if (arg.operator === "typeof") {
                result.variables[variable].isUsedTypeOf = true;
              }

              // If console.log is printing array stuff
              if (arg.type === "MemberExpression") {
                let log = variable;

                // 2D array
                if (typeof arg.object.property !== "undefined") {
                  log += `[${arg.object.property.value || arg.object.property.name}]`;
                }

                // If array property is index
                if (arg.property.type === "Literal") {
                  log += `[${arg.property.value}]`;
                }

                // If array property is Identifier (length etc.)
                if (arg.property.type === "Identifier") {
                  if (arg.computed) {
                    log += `[${arg.property.name}]`;
                  } else {
                    log += `.${arg.property.name}`;
                  }
                }

                variableChange(result.variables, variable, (variable) => {
                  if (_.isArray(variable.isLogged)) {
                    variable.isLogged.push(log);
                  } else {
                    variable.isLogged = [log];
                  }
                });
              }

              // Default behavior - this moment
              // means that variable was logged
              else {
                if (!_.isUndefined(result.variables[variable])) {
                  result.variables[variable].isLogged = true;
                }
              }
            } else {
              result.consoleLogs.push(arg.value);
            }
          }
        });
      }
    }
  });

  return result;
};

const parse = (dirname, filename = "app.js") => {
  const parsedCode = espree.parse(getTaskFileInString(dirname, filename), {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  });

  return parseBody(parsedCode.body);
};

export { parse, parseBody, getTaskFileInString };
