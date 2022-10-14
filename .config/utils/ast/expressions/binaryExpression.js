import * as _ from "lodash";

const side = (sideEl) => {
  let result = "";

  if (_.isUndefined(sideEl)) {
    return false;
  }

  switch (sideEl.type) {
    // Generic value
    case "Literal": {
      result += sideEl.raw;
      break;
    }

    // Object/Array
    case "MemberExpression": {
      const property = sideEl.property.name || sideEl.property.value;

      if (sideEl.object.type === "MemberExpression") {
        result += side(sideEl.object);
      }

      // Object
      if (!sideEl.computed) {
        const name = sideEl.object.name;

        if (_.isUndefined(name)) {
          result += `.${property}`;
        } else {
          result += `${name}.${property}`;
        }
      }

      // Array
      else {
        result += `${sideEl.object.name}[${property}]`;
      }
      break;
    }

    // Variable
    case "Identifier": {
      result += `${sideEl.name}`;
      break;
    }

    default: {
      result += sides(sideEl.left, sideEl.operator, sideEl.right);
    }
  }

  return result;
};

const sides = (left, operator, right) => {
  let result = "";
  result += `${side(left)} ${operator} ${side(right)}`;
  return result;
};

/**
 * Binary Expression parser
 * const a = 1 + 2;
 * const b = 5 + 7 + 10;
 * const c = a + " " + b;
 * @param declaration
 */
export const binaryExpression = ({left, operator, right}) => {
  return {
    value: sides(left, operator, right),
    isConcatenated: true,
  };
};
