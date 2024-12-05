import { valueToInt } from "../lib/lib";
import { buildRulesMap, isValidLine } from "./lib";

export const main = async (input: string) => {
  const [rules, updates] = input.split("\n\n");
  const rulesList = rules.split("\n");
  const updatesList = updates.split("\n");

  const rulesMap = buildRulesMap(rulesList);

  let invalidLines = [];
  for (const update of updatesList) {
    const numbers = update.split(",").map(valueToInt);

    if (isValidLine(numbers, rulesMap) === false) {
      invalidLines.push(numbers);
    }
  }

  let validatedLines = [];
  for (const invalidLine of invalidLines) {
    const fixedLine = invalidLine.toSorted((a, b) => {
      if (
        rulesMap.get(a)?.hasAfter.has(b) ||
        rulesMap.get(b)?.hasBefore.has(a)
      ) {
        return -1;
      } else if (
        rulesMap.get(b)?.hasAfter.has(a) ||
        rulesMap.get(a)?.hasBefore.has(b)
      ) {
        return 1;
      }

      return 0;
    });

    validatedLines.push(fixedLine);
  }

  return validatedLines
    .map((line) => {
      return line[(line.length - 1) / 2];
    })
    .reduce((a, b) => a + b, 0);
};
