import { splitValues } from "../lib/lib";
import { getNextPositionWithDirection, resetSymbol } from "./lib";

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

  let stuckCount = 0;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      const clonedMap = structuredClone(map);
      resetSymbol();
      let localInitialPosition: [number, number] = [
        initialPosition[0],
        initialPosition[1],
      ];

      if (clonedMap[i][j] === "^" || clonedMap[i][j] === "#") {
        continue;
      } else {
        clonedMap[i][j] = "#";
      }

      let done = false;
      while (done === false) {
        const [i, j] = localInitialPosition;
        try {
          const nextPosition = getNextPositionWithDirection(clonedMap, i, j);

          if (nextPosition === null) {
            done = true;
          } else {
            localInitialPosition = nextPosition;
          }
        } catch (error) {
          stuckCount++;
          done = true;
        }
      }
    }
  }

  return stuckCount;
};
