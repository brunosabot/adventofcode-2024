export const isEquationResolvable = (equation: string): boolean => {
  const [result, figures] = equation.split(": ");
  const numbers = figures.split(" ").map((n) => parseInt(n));
  const combinaisonCount = Math.pow(2, numbers.length - 1);

  const calculatedValues = new Array(combinaisonCount)
    .fill(0)
    .map((_, index) => {
      const indexBase3 = index.toString(2).padStart(numbers.length - 1, "0");
      const a = numbers.reduce((acc, cur, index2, arr) => {
        const reversedIndex = arr.length - index2 - 1;

        if (indexBase3[reversedIndex] === "0") {
          return acc + cur;
        }
        return acc * cur;
      });

      return a;
    });

  return calculatedValues.includes(+result);
};

export const isEquationResolvablePart2 = (equation: string): boolean => {
  const [result, figures] = equation.split(": ");
  const numbers = figures.split(" ").map((n) => parseInt(n));
  const combinaisonCount = Math.pow(3, numbers.length - 1);

  const calculatedValues = new Array(combinaisonCount)
    .fill(0)
    .map((_, index) => {
      const indexBase3 = index.toString(3).padStart(numbers.length - 1, "0");
      const a = numbers.reduce((acc, cur, index2, arr) => {
        const reversedIndex = arr.length - index2 - 1;

        if (indexBase3[reversedIndex] === "0") {
          return +`${acc}${cur}`;
        } else if (indexBase3[reversedIndex] === "1") {
          return acc + cur;
        }
        return acc * cur;
      });

      return a;
    });

  return calculatedValues.includes(+result);
};
