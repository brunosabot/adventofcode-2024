import { splitValues } from "../lib/lib";

export const transpose = (matrix: string[][]) =>
  matrix[0].map((_, index) => matrix.map((row) => row[index]));
export const transposeMinus45Deg = (matrix: string[][]) => {
  const temp: string[][] = [];
  for (let i = matrix.length - 1; i >= 0; i--) {
    const index = temp.length;
    temp[index] = [];
    for (let j = 0; j < matrix[i].length - i; j++) {
      temp[index].push(matrix[i + j][j]);
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    const index = temp.length;
    temp[index] = [];
    for (let j = 0; j < matrix[i].length - i; j++) {
      temp[index].push(matrix[j][i + j]);
    }
  }

  return temp;
};
export const transpose45Deg = (matrix: string[][]) => {
  const temp: string[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    const index = temp.length;
    temp[index] = [];
    for (let j = 0; j <= i; j++) {
      temp[index].push(matrix[i - j][j]);
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    const index = temp.length;
    temp[index] = [];
    for (let j = 0; j <= matrix.length - i - 1; j++) {
      temp[index].push(matrix[matrix.length - 1 - j][i + j]);
    }
  }

  return temp;
};

export const countLinesWithXMAS = (input: string) => {
  const array = splitValues(input, "\n");

  return array.reduce((acc, line) => {
    return (
      acc +
      [...line.matchAll(/XMAS/gi)].length +
      [...line.matchAll(/SAMX/gi)].length
    );
  }, 0);
};
export const countColumnsWithXMAS = (input: string) => {
  const array = splitValues(input, "\n").map((line) => splitValues(line, ""));
  const transposed = transpose(array);

  return countLinesWithXMAS(transposed.map((line) => line.join("")).join("\n"));
};
export const countDiagonalsWithXMAS = (input: string) => {
  const array = splitValues(input, "\n").map((line) => splitValues(line, ""));
  const transposedMinus = transposeMinus45Deg(array);
  const transposed = transpose45Deg(array);

  return (
    countLinesWithXMAS(transposed.map((line) => line.join("")).join("\n")) +
    countLinesWithXMAS(transposedMinus.map((line) => line.join("")).join("\n"))
  );
};
