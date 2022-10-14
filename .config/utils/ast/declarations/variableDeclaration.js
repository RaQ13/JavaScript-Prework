import { arrayExpression, binaryExpression, objectExpression } from "../expressions";
import * as _ from "lodash";

const VARIABLE_DEFAULT = {
  assignedValue: null,
  isLogged: false,
  isUsedTypeOf: false,
  isConcatenated: false,
  isReference: false,
  usedExpressions: [],
  pushedValues: [],
};

const variableChange = (variables, name, callback) => {
  if (_.isUndefined(variables[name])) {
    variables[name] = {
      name,
      ...VARIABLE_DEFAULT,
    };
  }

  if (_.isFunction(callback)) {
    callback(variables[name]);
  }
};

/**
 * Parser for variable declarations
 * @param result
 * @param kind
 * @param declarations
 * @return {{}}
 */
const variableDeclaration = ({ kind, declarations }) => {
  const declaration = declarations[0];
  const variableName = declaration.id.name;
  const variableValue = declaration?.init?.value;
  const variableType = declaration?.init?.type;

  let variable = {
    type: kind,
    name: variableName,
    value: variableValue,
    ...VARIABLE_DEFAULT,
  };

  switch (variableType) {
    case "BinaryExpression":
      variable = {
        ...variable,
        ...binaryExpression(declaration.init),
      };
      break;
    case "ArrayExpression":
      variable = {
        ...variable,
        ...arrayExpression(declaration.init),
      };
      break;
    case "ObjectExpression":
      variable = {
        ...variable,
        ...objectExpression(declaration.init),
      };
      break;
    case "CallExpression":
      variable = {
        ...variable,
        value: `${declaration.init.callee.name}(${declaration.init.arguments.map((v) => v.name).join(", ")})`,
      };
      break;
    case "Identifier":
      variable = {
        ...variable,
        value: declaration.init.name,
        isReference: true,
      };
      break;
  }

  return {
    [variableName]: variable,
  };
};


export {VARIABLE_DEFAULT, variableDeclaration, variableChange}