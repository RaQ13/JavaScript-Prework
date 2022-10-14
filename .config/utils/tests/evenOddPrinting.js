import * as _ from "lodash";

export const correctEvenOddPrinting = (statements) => {
  let isEvenCount = 0;
  let isOddCount = 0;

  statements.forEach((statement) => {
    const even = ["value", `i + " - even"`];
    const odd = ["value", `i + " - odd"`];
    const errorMsg = `You printed wrong values according to specified condition.`;

    if (["i % 2 === 0", "i % 2 == 0"].includes(statement.condition)) {
      expect(statement.consequent.consoleLogs[0], errorMsg).toContainEntry(even);

      if (!_.isNull(statement.alternate)) {
        expect(statement.alternate.consoleLogs[0], errorMsg).toContainEntry(odd);
        isOddCount++;
      }
      isEvenCount++;
    } else if (["i % 2 !== 0", "i % 2 != 0"].includes(statement.condition)) {
      expect(statement.consequent.consoleLogs[0], errorMsg).toContainEntry(odd);

      if (!_.isNull(statement.alternate)) {
        expect(statement.alternate.consoleLogs[0], errorMsg).toContainEntry(even);
        isEvenCount++;
      }

      isOddCount++;
    }
  });

  expect(isEvenCount, `You should have use "even condition" in if statement only once.`).toEqual(1);
  expect(isOddCount, `You should have use "odd condition" in if statement only once.`).toEqual(1);
};

export const correctIfConditions = (statements) => {
  const correctConditions = ["i % 2 === 0", "i % 2 !== 0", "i % 2 == 0", "i % 2 != 0"];
  expect(statements, "You have used wrong condition.").toSatisfyAll(({ condition }) =>
    correctConditions.includes(condition)
  );
};
