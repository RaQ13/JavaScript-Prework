export const correctInitValue = (statement, initValue, initName = "i") => {
  expect(
    statement.init[initName],
    `You should have use "${initValue}" variable (let) set to "${initValue}".`
  ).toContainEntries([
    ["type", "let"],
    ["name", initName],
    ["value", initValue],
  ]);
};

export const correctCounterIncrementing = (statement, counter = "i") => {
  // If students used ++ incrementing
  if (statement.init[counter].assignedValue === null) {
    expect(statement.update.name, "You have used wrong variable.").toBe(counter);
    expect(statement.update.operator, "You have used wrong operator.").toBe("++");
  }

  // Student used something like "i = i + 1"
  else {
    expect(statement.init[counter].assignedValue.value).toBe(`${counter} + 1`);
  }
};
