import { parseBody } from "../index";

export const functionDeclaration = ({ params, id: { name }, body: { body } }) => {
  return {
    name,
    params: params.map((v) => v.name),
    void: !body.some((v) => v.type === "ReturnStatement"),
    body: parseBody(body),
  };
};
