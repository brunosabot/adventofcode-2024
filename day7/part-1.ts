import { splitValues, valueToInt } from "../lib/lib";
import { isEquationResolvable } from "./lib";

export const main = async (input: string) => {
  const lines = splitValues(input);

  return lines.filter(isEquationResolvable).reduce((acc, value) => {
    const [result] = value.split(": ");

    return acc + valueToInt(result);
  }, 0);
};
