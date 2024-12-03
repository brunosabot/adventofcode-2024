import { valueToInt } from "../lib/lib.js";

export const main = async (input: string) => {
  const found = input.match(/(mul\(\d+,\d+\))|(do\(\))|don't\(\)/g);
  if (!found) return 0;

  let total = 0;
  let isDoing = true;

  found.forEach((value) => {
    if (value === "do()") {
      isDoing = true;
    } else if (value === "don't()") {
      isDoing = false;
    } else if (isDoing) {
      const [left, right] = value
        .replace("mul(", "")
        .replace(")", "")
        .split(",");

      total += valueToInt(left) * valueToInt(right);
    }
  });

  return total;
};
