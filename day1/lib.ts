import { valueToInt } from "../lib/lib";

export function getDistances(left: number[], right: number[]) {
  if (left.length !== right.length) {
    throw new Error("The arrays must have the same length");
  }

  const leftSorted = left.toSorted();
  const rightSorted = right.toSorted();

  return leftSorted.map((value, index) => Math.abs(value - rightSorted[index]));
}

export function getDistancesWithSimilarity(left: number[], right: number[]) {
  const rightFigureCount = new Map<number, number>();
  right.forEach((value) => {
    rightFigureCount.set(value, (rightFigureCount.get(value) ?? 0) + 1);
  });

  return left.map((value) =>
    Math.abs(value * (rightFigureCount.get(value) ?? 0)),
  );
}

export type NumberLeftRight = { left: number[]; right: number[] };
export function reduceLeftRight(
  acc: NumberLeftRight,
  stringTuple: string[],
): NumberLeftRight {
  acc.left.push(valueToInt(stringTuple[0]));
  acc.right.push(valueToInt(stringTuple[1]));

  return acc;
}
