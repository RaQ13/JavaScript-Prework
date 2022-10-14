export const correctInitValue = (variable, initValue) => {
  expect(variable, `You should have use "i" variable (let) set to "1".`).toContainEntries([
    ["type", "let"],
    ["name", "i"],
    ["value", initValue],
  ]);
};

export const correctCounterIncrementing = (statement) => {
  const iVariable = statement.body.variables?.i;
  // If students used ++ incrementing
  if (iVariable.assignedValue === null) {
    expect(iVariable.usedExpressions[0].name, "You have used wrong variable.").toBe("i");
    expect(iVariable.usedExpressions[0].operator, "You have used wrong operator.").toBe("++");
  }

  // Student used something like "i = i + 1"
  else {
    expect(iVariable.assignedValue.value).toBe("i + 1");
  }
};
