import { binaryExpression } from "../expressions";
import { parseBody } from "../index";
import { variableDeclaration } from "../declarations";
import { updateExpression } from "../expressions/updateExpression";
import { assignmentExpression } from "../expressions/assignmentExpression";

export const forStatement = ({ init, test, update, body: { body } }) => {
  const result = {
    init: variableDeclaration(init),
    test: binaryExpression(test).value,
    body: parseBody(body),
  };

  switch (update.type) {
    case "UpdateExpression": {
      result.update = updateExpression(update);
      break;
    }

    case "AssignmentExpression": {
      result.update = assignmentExpression(result.init, update);
      break;
    }
  }

  return result;
};
