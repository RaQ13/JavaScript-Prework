import { binaryExpression } from "../expressions";
import { parseBody } from "../index";

export const ifStatement = ({ test, consequent, alternate }) => {
  return {
    condition: binaryExpression(test).value,
    consequent: parseBody(consequent.body),
    alternate: alternate !== null ? parseBody(alternate.body) : null,
  };
};
