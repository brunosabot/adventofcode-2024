import { splitValues, valueToInt } from "../lib/lib.js";
import {
  isIncreasingOrDecreasing,
  isIncreasingOrDecreasingByOneToThree,
} from "./lib.js";

export const main = async (input: string) => {
  return splitValues(input)
    .map((line) => splitValues(line, " ").map(valueToInt))
    .map((levels) => {
      for (let i = 0; i < levels.length; i++) {
        const slicedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];
        const isSafe =
          isIncreasingOrDecreasing(slicedLevels) &&
          isIncreasingOrDecreasingByOneToThree(slicedLevels);

        if (isSafe) return true;
      }
      return false;
    })
    .filter((isReportValid) => isReportValid).length;
};
