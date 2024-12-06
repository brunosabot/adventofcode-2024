import { splitValues } from "../lib/lib";
import { getNextPosition } from "./lib";

export const main = async (input: string) => {
  const map = splitValues(input, "\n").map((row) => splitValues(row, ""));
  let initialPosition = [0, 0];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "^") {
        initialPosition = [i, j];
      }
    }
  }

  while (true) {
    const [i, j] = initialPosition;
    const nextPosition = getNextPosition(map, i, j);

    if (nextPosition === null) {
      break;
    }

    initialPosition = nextPosition;
  }

  return map.flat().filter((value) => value === "X").length;
};
