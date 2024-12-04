export const main = async (input: string) => {
  const lines = input.split("\n");
  let total = 0;

  for (let i = 0; i <= lines.length - 3; i++) {
    const line = lines[i];
    for (let j = 0; j <= line.length - 3; j++) {
      if (
        (lines[i][j] === "M" &&
          lines[i + 2][j] === "S" &&
          lines[i + 1][j + 1] === "A" &&
          lines[i + 2][j + 2] === "S" &&
          lines[i][j + 2] === "M") ||
        (lines[i][j] === "S" &&
          lines[i + 2][j] === "M" &&
          lines[i + 1][j + 1] === "A" &&
          lines[i + 2][j + 2] === "M" &&
          lines[i][j + 2] === "S") ||
        (lines[i][j] === "S" &&
          lines[i + 2][j] === "S" &&
          lines[i + 1][j + 1] === "A" &&
          lines[i + 2][j + 2] === "M" &&
          lines[i][j + 2] === "M") ||
        (lines[i][j] === "M" &&
          lines[i + 2][j] === "M" &&
          lines[i + 1][j + 1] === "A" &&
          lines[i + 2][j + 2] === "S" &&
          lines[i][j + 2] === "S")
      ) {
        total++;
      }
    }
  }
  return total;
};
