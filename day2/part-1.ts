import { splitValues, valueToInt } from "../lib/lib.js";
import {
  isIncreasingOrDecreasing,
  isIncreasingOrDecreasingByOneToThree,
} from "./lib.js";

export const main = async (input: string) => {
  return splitValues(input)
    .map((line) => splitValues(line, " ").map(valueToInt))
    .map(
      (levels) =>
        isIncreasingOrDecreasing(levels) &&
        isIncreasingOrDecreasingByOneToThree(levels),
    )
    .filter((isReportValid) => isReportValid).length;
};
