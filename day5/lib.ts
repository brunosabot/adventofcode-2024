import { valueToInt } from "../lib/lib";

type RulesMap = Map<number, { hasAfter: Set<number>; hasBefore: Set<number> }>;

export const buildRulesMap = (rules: string[]) => {
  const rulesMap = new Map<
    number,
    { hasAfter: Set<number>; hasBefore: Set<number> }
  >();

  for (const rule of rules) {
    const [previous, after] = rule.split("|");
    const numberPrevious = valueToInt(previous);
    const numberAfter = valueToInt(after);

    if (!rulesMap.has(numberPrevious)) {
      rulesMap.set(numberPrevious, {
        hasAfter: new Set(),
        hasBefore: new Set(),
      });
    }

    rulesMap.get(numberPrevious)?.hasAfter.add(numberAfter);
    rulesMap.get(numberAfter)?.hasBefore.add(numberPrevious);
  }

  return rulesMap;
};

export const isValidLine = (numbers: number[], rulesMap: RulesMap) => {
  return numbers.every((n, i, a) => {
    const previousNumbers = a.slice(0, i);
    const afterNumbers = a.slice(i + 1);

    const validateBefore = previousNumbers.every((previousNumber) => {
      return rulesMap.get(n)?.hasAfter.has(previousNumber) !== true;
    });
    const validateAfter = afterNumbers.every((afterNumber) => {
      return rulesMap.get(n)?.hasBefore.has(afterNumber) !== true;
    });

    return validateBefore && validateAfter;
  });
};
