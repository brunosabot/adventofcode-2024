import { describe, expect, it } from "vitest";
import { getDistances, getDistancesWithSimilarity } from "./lib";

describe("Given the getDistances function", () => {
  describe("When the smallest distance", () => {
    it("Then the value should be 1", () => {
      const exampleLeft = [3, 4, 2, 1, 3, 3];
      const exampleRight = [4, 3, 5, 3, 9, 3];

      expect(getDistances(exampleLeft, exampleRight)).toEqual([
        2, 1, 0, 1, 2, 5,
      ]);
    });
  });
});

describe("Given the getNumberWithSimilarity function", () => {
  describe("When the smallest distance", () => {
    it("Then the value should be 1", () => {
      const exampleLeft = [3, 4, 2, 1, 3, 3];
      const exampleRight = [4, 3, 5, 3, 9, 3];

      expect(getDistancesWithSimilarity(exampleLeft, exampleRight)).toEqual([
        9, 4, 0, 0, 9, 9,
      ]);
    });
  });
});
