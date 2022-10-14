import { binaryExpression } from "../expressions";
import { parseBody } from "../index";

export const whileStatement = ({ test, body: { body } }) => {
  const result = {
    body: parseBody(body),
  };

  if (test.type === "Literal") {
    result.test = test.value;
  } else {
    result.test = binaryExpression(test).value;
  }

  return result;
};
