import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("Arithmetic operators", function () {
  ESLintTest(__dirname);

  let app, task, johnAge, aliceAge, bobAge, ageSum, ageModulo, ageDivide, ageOperations;

  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    johnAge = getVariable(app, "johnAge");
    aliceAge = getVariable(app, "aliceAge");
    bobAge = getVariable(app, "bobAge");
    ageSum = getVariable(app, "ageSum");
    ageModulo = getVariable(app, "ageModulo");
    ageDivide = getVariable(app, "ageDivide");
    ageOperations = getVariable(app, "ageOperations");
  });

  test(`Variable "johnAge" has value 25`, () => {
    expect(johnAge).toBe(25);
  });

  test(`Variable "aliceAge" has value 30`, () => {
    expect(aliceAge).toBe(30);
  });

  test(`Variable "bobAge" has value 17`, () => {
    expect(bobAge).toBe(17);
  });

  test(`Variable "ageSum" is sum of "johnAge" and "aliceAge" and is logged`, () => {
    expect(ageSum).toBe(55);
    expect(task.variables.ageSum.value).toBe("johnAge + aliceAge");
    expect(task.variables.ageSum.isLogged, "You have to use console.log.").toBe(true);
  });

  test(`Variable "ageModulo" is the remainder of dividing "aliceAge" by "johnAge" and is logged`, () => {
    expect(ageModulo).toBe(5);
    expect(task.variables.ageModulo.value).toBe("aliceAge % johnAge");
    expect(task.variables.ageModulo.isLogged, "You have to use console.log.").toBe(true);
  });

  test(`Variable "ageDivide" is dividing of "aliceAge" by "bobAge" and is logged`, () => {
    expect(ageDivide).toBe(1.7647058823529411);
    expect(task.variables.ageDivide.value).toBe("aliceAge / bobAge");
    expect(task.variables.ageDivide.isLogged, "You have to use console.log.").toBe(true);
  });

  test(`Variable "ageOperations" is result of multiplying "ageSum" by "ageModulo" and is logged`, () => {
    expect(ageOperations).toBe(275);
    expect(task.variables.ageOperations.value).toBe("ageSum * ageModulo");
    expect(task.variables.ageOperations.isLogged, "You have to use console.log.").toBe(true);
  });
});
