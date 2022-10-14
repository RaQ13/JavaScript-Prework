export const updateExpression = ({ prefix, operator, argument }) => {
  return {
    name: argument.name,
    prefix,
    operator,
  };
};
