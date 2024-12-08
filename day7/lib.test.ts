import { describe, expect, it } from "vitest";
import { isEquationResolvable, isEquationResolvablePart2 } from "./lib";

describe("Given the isEquationResolvable function", () => {
  describe("When the equation is resolvable", () => {
    it("Then it return true", () => {
      expect(isEquationResolvable("190: 10 19")).toBe(true);
      expect(isEquationResolvable("3267: 81 40 27")).toBe(true);
      expect(isEquationResolvable("292: 11 6 16 20")).toBe(true);
    });
  });

  describe("When the equation is not resolvable", () => {
    it("Then it return false", () => {
      expect(isEquationResolvable("83: 17 5")).toBe(false);
      expect(isEquationResolvable("156: 15 6")).toBe(false);
      expect(isEquationResolvable("7290: 6 8 6 15")).toBe(false);
      expect(isEquationResolvable("161011: 16 10 13")).toBe(false);
      expect(isEquationResolvable("192: 17 8 14")).toBe(false);
      expect(isEquationResolvable("21037: 9 7 18 13")).toBe(false);
    });
  });
});

describe("Given the isEquationResolvablePart2 function", () => {
  describe("When the equation is resolvable", () => {
    it("Then it return true", () => {
      expect(isEquationResolvablePart2("190: 10 19")).toBe(true);
      expect(isEquationResolvablePart2("3267: 81 40 27")).toBe(true);
      expect(isEquationResolvablePart2("292: 11 6 16 20")).toBe(true);
      expect(isEquationResolvablePart2("156: 15 6")).toBe(true);
      expect(isEquationResolvablePart2("7290: 6 8 6 15")).toBe(true);
      expect(isEquationResolvablePart2("192: 17 8 14")).toBe(true);
    });
  });

  describe("When the equation is not resolvable", () => {
    it("Then it return false", () => {
      expect(isEquationResolvablePart2("83: 17 5")).toBe(false);
      expect(isEquationResolvablePart2("161011: 16 10 13")).toBe(false);
      expect(isEquationResolvablePart2("21037: 9 7 18 13")).toBe(false);
    });
  });
});
