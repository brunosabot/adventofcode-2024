import { splitValues } from "../lib/lib.js";

export const main = async (input: string) => {
  const map = splitValues(input).map((line) => splitValues(line, ""));

  let uniqueFrequencies = new Map<string, [number, number][]>();
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] !== ".") {
        const c = uniqueFrequencies.get(map[i][j]) ?? [];
        c.push([i, j]);
        uniqueFrequencies.set(map[i][j], c);
      }
    }
  }

  uniqueFrequencies.forEach((value) => {
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < value.length; j++) {
        const distanceX = value[i][0] - value[j][0];
        const distanceY = value[i][1] - value[j][1];

        if (distanceX > 0 || distanceY > 0) {
          let done = 1;
          while (done > 0) {
            const antinodeX1 = value[i][0] + done * distanceX;
            const antinodeY1 = value[i][1] + done * distanceY;

            if (
              antinodeX1 >= 0 &&
              antinodeX1 < map.length &&
              antinodeY1 >= 0 &&
              antinodeY1 < map[antinodeX1].length
            ) {
              if (map[antinodeX1][antinodeY1] === ".") {
                map[antinodeX1][antinodeY1] = "#";
              }
              done++;
            } else {
              done = 0;
            }
          }

          done = 1;
          while (done > 0) {
            const antinodeX2 = value[j][0] - done * distanceX;
            const antinodeY2 = value[j][1] - done * distanceY;
            if (
              antinodeX2 >= 0 &&
              antinodeX2 < map.length &&
              antinodeY2 >= 0 &&
              antinodeY2 < map[antinodeX2].length
            ) {
              if (map[antinodeX2][antinodeY2] === ".") {
                map[antinodeX2][antinodeY2] = "#";
              }
              done++;
            } else {
              done = 0;
            }
          }
        }
      }
    }
  });

  return map.flat().filter((value) => value !== ".").length;
};
