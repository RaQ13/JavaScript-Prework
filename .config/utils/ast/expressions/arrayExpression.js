/**
 * Array Expression parser
 * Array is declared as variable value
 * const arr = [1, 2, 3]
 * @param declaration
 */
export const arrayExpression = (declaration) => {
  return {
    value: declaration.elements.map((el) => {
      // 1D arrays
      if (typeof el.value !== "undefined") {
        return el.value;
      }

      // 2D arrays
      else if (typeof el.elements !== "undefined") {
        return el.elements.map((nextEl) => nextEl.value);
      }
    }),
  };
};
