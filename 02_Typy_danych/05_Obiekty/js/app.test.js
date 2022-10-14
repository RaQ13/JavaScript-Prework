import { ESLintTest, getVariable, parse, rewire } from "utils";

describe("Objects", function () {
  ESLintTest(__dirname);

  let app, task, car, color, referenceColor;
  beforeAll(() => {
    app = rewire(__dirname);
    task = parse(__dirname);
    car = getVariable(app, "car");
    color = getVariable(app, "color");
    referenceColor = getVariable(app, "referenceColor");
  });

  describe("Car", () => {
    test("Is an object", () => {
      expect(car).toBeObject();
    });

    test('Contains "type" property with "sedan" value', () => {
      expect(car).toContainEntry(["type", "sedan"]);
    });

    test('Contains "color" property with "green" value', () => {
      expect(car).toContainEntry(["color", "green"]);
    });

    test('Contains "engine" property with "2.5" value', () => {
      expect(car).toContainEntry(["engine", 2.5]);
    });

    test("carDescription is concatenating car properties", () => {
      expect(task.variables.carDescription.isConcatenated).toBe(true);
      expect(task.variables.carDescription.value).toEqual('car.type + " " + car.color + " " + car.engine');
    });

    test("carDescription is logged", () => {
      expect(task.variables.carDescription.isLogged).toBe(true);
    });
  });

  describe("Colors", () => {
    test("Color is an object", () => {
      expect(color).toBeObject();
    });

    test("Reference Color is the same object as color", () => {
      expect(referenceColor).toBeObject();
      expect(task.variables.referenceColor.isReference).toBe(true);
      expect(task.variables.referenceColor.value).toEqual("color");
    });

    test('Contains "red" property with 100 value', () => {
      expect(task.variables.color.value).toContainEntry(["red", 100]);
      expect(referenceColor).toContainEntry(["red", 50]);
    });

    test('Contains "green" property with 0 value', () => {
      expect(task.variables.color.value).toContainEntry(["green", 0]);
      expect(referenceColor).toContainEntry(["green", 50]);
    });

    test('Contains "blue" property with 50 value', () => {
      expect(task.variables.color.value).toContainEntry(["blue", 50]);
    });
  });
});
