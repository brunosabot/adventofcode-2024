import { valueToInt } from "../lib/lib.js";

export const main = async (input: string) => {
  const found = input.match(/mul\(\d+,\d+\)/g);
  if (!found) return 0;

  return found
    .map((value) => {
      const [left, right] = value
        .replace("mul(", "")
        .replace(")", "")
        .split(",");

      return valueToInt(left) * valueToInt(right);
    })
    .reduce((acc, v) => acc + v, 0);
};
