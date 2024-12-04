import {
  countColumnsWithXMAS,
  countDiagonalsWithXMAS,
  countLinesWithXMAS,
} from "./lib.js";

export const main = async (input: string) => {
  const lineCheck = countLinesWithXMAS(input);
  const columnCheck = countColumnsWithXMAS(input);
  const diagonalCheck = countDiagonalsWithXMAS(input);

  return lineCheck + columnCheck + diagonalCheck;
};
