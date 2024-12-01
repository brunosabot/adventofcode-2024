import { splitValues } from "../lib/lib";
import { getDistances, NumberLeftRight, reduceLeftRight } from "./lib";

export const main = async (input: string) => {
  const lines = splitValues(input)
    .map((line) => splitValues(line, "   "))
    .reduce<NumberLeftRight>(reduceLeftRight, {
      left: [],
      right: [],
    });

  const distances = getDistances(lines.left, lines.right);
  return distances.reduce((acc, distance) => acc + distance, 0);
};
