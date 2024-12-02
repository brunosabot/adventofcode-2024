function isAscending(values: number[]) {
  return values.every(function (value, index) {
    return index === 0 || value >= values[index - 1];
  });
}
function isDescending(values: number[]) {
  return values.every(function (value, index) {
    return index === 0 || value <= values[index - 1];
  });
}

export const isIncreasingOrDecreasing = (values: number[]) => {
  return isAscending(values) || isDescending(values);
};

export const isIncreasingOrDecreasingByOneToThree = (values: number[]) => {
  for (let i = 1; i < values.length; i++) {
    const diff = Math.abs(values[i] - values[i - 1]);

    if (diff < 1 || diff > 3) return false;
  }

  return true;
};
