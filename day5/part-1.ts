import { valueToInt } from "../lib/lib.js";
import { buildRulesMap, isValidLine } from "./lib.js";

export const main = async (input: string) => {
  const [rules, updates] = input.split("\n\n");
  const rulesList = rules.split("\n");
  const updatesList = updates.split("\n");

  const rulesMap = buildRulesMap(rulesList);

  let validLines = [];
  for (const update of updatesList) {
    const numbers = update.split(",").map(valueToInt);

    if (isValidLine(numbers, rulesMap)) {
      validLines.push(numbers);
    }
  }

  return validLines
    .map((line) => {
      return line[(line.length - 1) / 2];
    })
    .reduce((a, b) => a + b, 0);
};
