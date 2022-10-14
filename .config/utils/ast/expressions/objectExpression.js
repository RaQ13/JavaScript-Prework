/**
 * Object Expression parser
 * Object is declared as variable value
 * const obj = {a: 1, b: 2, c: 3}
 * @param declaration
 */

export const objectExpression = (declaration) => {
  const obj = {};
  declaration.properties.forEach(({ key, value }) => {
    obj[key.name] = value.value;
  });

  return {
    value: obj,
  };
};
