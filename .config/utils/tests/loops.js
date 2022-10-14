export const correctCondition = (
  statement,
  test,
  message = `You should operate between "i" and "n" values inclusive.`
) => {
  expect(statement.test, message).toBe(test);
};
