import { parseBody } from "../index";

export const switchStatement = ({ discriminant, cases }) => {
  return {
    discriminant: discriminant.name,
    cases: cases.map(({ test, consequent }) => ({
      test: test.value,
      consequent: parseBody(consequent),
    })),
  };
};
