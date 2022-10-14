import { binaryExpression } from "./binaryExpression";

import * as _ from "lodash";
import { variableChange } from "../declarations/variableDeclaration";

export const assignmentExpression = (variables, expression) => {
  let variableName, value;

  // Basic assigment
  if (expression.operator === "=") {
    // left: object
    if (expression.left.type === "MemberExpression") {
      variableName = expression.left.object.name;
      value = [expression.left.property.name, expression.right.value];

      variableChange(variables, variableName, (variable) => {
        if (_.isArray(variable.assignedValue)) {
          variable.assignedValue.push(value);
        } else {
          variable.assignedValue = [value];
        }
      });
    }

    // left: variable
    else {
      variableName = expression.left.name;

      if (expression.right.type === "BinaryExpression") {
        value = binaryExpression(expression.right);
      } else {
        value = expression.right.value || expression.right.name;
      }

      variableChange(variables, variableName, (variable) => {
        variable.assignedValue = value;
      });
    }
  }

  return value;
};
