import { describe, expect, it } from "vitest";
import {
  isIncreasingOrDecreasing,
  isIncreasingOrDecreasingByOneToThree,
} from "./lib";

describe("Given the isIncreasingOrDecreasing function", () => {
  describe("When the values are increasing", () => {
    it("Then the value should be true", () => {
      const exampleValues = [1, 2, 3, 4, 5];

      expect(isIncreasingOrDecreasing(exampleValues)).toBe(true);
    });
  });

  describe("When the values are decreasing", () => {
    it("Then the value should be true", () => {
      const exampleValues = [5, 4, 3, 2, 1];

      expect(isIncreasingOrDecreasing(exampleValues)).toBe(true);
    });
  });

  describe("When the values are not sorted", () => {
    it("Then the value should be false", () => {
      const exampleValues = [1, 5, 2, 4, 3];

      expect(isIncreasingOrDecreasing(exampleValues)).toBe(false);
    });
  });
});

describe("Given the isIncreasingOrDecreasingByOneToThree function", () => {
  describe("When the values are moving > 0 and <= 3", () => {
    it("Then the value should be true", () => {
      const exampleValues = [7, 6, 4, 2, 1];

      expect(isIncreasingOrDecreasingByOneToThree(exampleValues)).toBe(true);
    });
  });
  describe("When the values are moving > 3", () => {
    it("Then the value should be true", () => {
      const exampleValues = [1, 2, 7, 8, 9];

      expect(isIncreasingOrDecreasingByOneToThree(exampleValues)).toBe(false);
    });
  });
  describe("When the values are moving <= 0 and > 3", () => {
    it("Then the value should be false", () => {
      const exampleValues = [9, 7, 6, 2, 1];

      expect(isIncreasingOrDecreasingByOneToThree(exampleValues)).toBe(false);
    });
  });
  describe("When the values are moving > 0", () => {
    it("Then the value should be false", () => {
      const exampleValues = [8, 6, 4, 4, 1];

      expect(isIncreasingOrDecreasingByOneToThree(exampleValues)).toBe(false);
    });
  });
  describe("When the values are moving > 0 and <= 3", () => {
    it("Then the value should be false", () => {
      const exampleValues = [1, 3, 6, 7, 9];

      expect(isIncreasingOrDecreasingByOneToThree(exampleValues)).toBe(true);
    });
  });
});
