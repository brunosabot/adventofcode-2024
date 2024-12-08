import { splitValues, valueToInt } from "../lib/lib";
import { isEquationResolvablePart2 } from "./lib";

export const main = async (input: string) => {
  const lines = splitValues(input);

  return lines.filter(isEquationResolvablePart2).reduce((acc, value) => {
    const [result] = value.split(": ");

    return acc + valueToInt(result);
  }, 0);
};
