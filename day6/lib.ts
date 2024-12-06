export const getNextPosition = (
  map: string[][],
  i: number,
  j: number,
): [number, number] | null => {
  const nextPosition: [number, number] = [i, j];

  let symbol = map[i][j];

  if (map[i][j] === "^") {
    nextPosition[0] = i - 1;
    nextPosition[1] = j;
  } else if (map[i][j] === ">") {
    nextPosition[0] = i;
    nextPosition[1] = j + 1;
  } else if (map[i][j] === "<") {
    nextPosition[0] = i;
    nextPosition[1] = j - 1;
  } else if (map[i][j] === "v") {
    nextPosition[0] = i + 1;
    nextPosition[1] = j;
  }

  if (
    nextPosition[0] >= map.length ||
    nextPosition[1] >= map[nextPosition[0]].length
  ) {
    map[i][j] = "X";

    return null;
  }

  if (map[nextPosition[0]][nextPosition[1]] === "#") {
    if (map[i][j] === "^") {
      map[i][j] = ">";
    } else if (map[i][j] === ">") {
      map[i][j] = "v";
    } else if (map[i][j] === "<") {
      map[i][j] = "^";
    } else if (map[i][j] === "v") {
      map[i][j] = "<";
    }

    return [i, j];
  }

  map[i][j] = "X";
  map[nextPosition[0]][nextPosition[1]] = symbol;

  return nextPosition;
};

let lastSymbol = "^";
let directions = new Map<string, Set<string>>();

const assignSymbol = (map: string[][], i: number, j: number) => {
  if (lastSymbol === "^" || lastSymbol === "v") {
    if (map[i][j] === "-" || map[i][j] === "+") {
      map[i][j] = "+";
    } else {
      map[i][j] = "|";
    }
  }
  if (lastSymbol === ">" || lastSymbol === "<") {
    if (map[i][j] === "|" || map[i][j] === "+") {
      map[i][j] = "+";
    } else {
      map[i][j] = "-";
    }
  }
};
export const resetSymbol = () => {
  lastSymbol = "^";
  directions = new Map<string, Set<string>>();
};
export const getNextPositionWithDirection = (
  map: string[][],
  i: number,
  j: number,
): [number, number] | null => {
  const nextPosition: [number, number] = [i, j];

  if (lastSymbol === "^") {
    nextPosition[0] = i - 1;
    nextPosition[1] = j;
  } else if (lastSymbol === ">") {
    nextPosition[0] = i;
    nextPosition[1] = j + 1;
  } else if (lastSymbol === "<") {
    nextPosition[0] = i;
    nextPosition[1] = j - 1;
  } else if (lastSymbol === "v") {
    nextPosition[0] = i + 1;
    nextPosition[1] = j;
  }

  if (map?.[nextPosition[0]]?.[nextPosition[1]] === undefined) {
    assignSymbol(map, i, j);

    return null;
  }

  if (map[nextPosition[0]][nextPosition[1]] === "#") {
    if (lastSymbol === "^") {
      lastSymbol = ">";
    } else if (lastSymbol === ">") {
      lastSymbol = "v";
    } else if (lastSymbol === "<") {
      lastSymbol = "^";
    } else if (lastSymbol === "v") {
      lastSymbol = "<";
    }

    let direction =
      directions.get(`${nextPosition[0]}_${nextPosition[1]}`) ?? new Set();
    if (direction.has(lastSymbol)) {
      throw new Error("Stuck");
    } else {
      direction.add(lastSymbol);
    }
    directions.set(`${nextPosition[0]}_${nextPosition[1]}`, direction);

    map[i][j] = "+";

    return [i, j];
  }

  assignSymbol(map, i, j);

  return nextPosition;
};
