import { describe, expect, it } from "vitest";
import {
  countColumnsWithXMAS,
  countLinesWithXMAS,
  transpose,
  transposeMinus45Deg,
  transpose45Deg,
} from "./lib";

describe("Given the transpose function", () => {
  describe("When there is a matrix", () => {
    it("Then it should transpose it", () => {
      expect(
        transpose([
          ["1", "2", "3"],
          ["4", "5", "6"],
          ["7", "8", "9"],
        ]),
      ).toEqual([
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
      ]);
    });
  });
});
describe("Given the transposeMinus45Deg function", () => {
  describe("When there is a matrix", () => {
    it("Then it should transpose it", () => {
      expect(
        transposeMinus45Deg([
          ["1", "2", "3"],
          ["4", "5", "6"],
          ["7", "8", "9"],
        ]),
      ).toEqual([["7"], ["4", "8"], ["1", "5", "9"], ["2", "6"], ["3"]]);
    });
  });
});
describe("Given the transpose45Deg function", () => {
  describe("When there is a matrix", () => {
    it("Then it should transpose it", () => {
      expect(
        transpose45Deg([
          ["1", "2", "3"],
          ["4", "5", "6"],
          ["7", "8", "9"],
        ]),
      ).toEqual([["1"], ["4", "2"], ["7", "5", "3"], ["8", "6"], ["9"]]);
    });
  });
});

describe("Given the countLinesWithXMAS function", () => {
  describe("When there is lines with XMAS", () => {
    it("Then it should count it", () => {
      expect(countLinesWithXMAS("XXMASS")).toBe(1);
    });
  });
  describe("When there is lines with 2 XMAS", () => {
    it("Then it should count it", () => {
      expect(countLinesWithXMAS("XXMASXMASS")).toBe(2);
    });
  });
  describe("When there is lines with SAMX", () => {
    it("Then it should count it", () => {
      expect(countLinesWithXMAS("XSAMXS")).toBe(1);
    });
  });
  describe("When there is lines with 2 SAMX", () => {
    it("Then it should count it", () => {
      expect(countLinesWithXMAS("XSAMXSAMXS")).toBe(2);
    });
  });
});

describe("Given the countColumnsWithXMAS function", () => {
  describe("When there is lines with XMAS", () => {
    it("Then it should count it", () => {
      expect(countColumnsWithXMAS("XXX\nXMXX\nXAXX\nXSXX")).toBe(1);
    });
  });
  describe("When there is lines with 2 XMAS", () => {
    it("Then it should count it", () => {
      expect(
        countColumnsWithXMAS("XXX\nXMXX\nXAXX\nXSXX\nXXX\nXMXX\nXAXX\nXSXX"),
      ).toBe(2);
    });
  });
  describe("When there is lines with SAMX", () => {
    it("Then it should count it", () => {
      expect(countColumnsWithXMAS("XSX\nXAXX\nXMXX\nXXXX")).toBe(1);
    });
  });
  describe("When there is lines with 2 SAMX", () => {
    it("Then it should count it", () => {
      expect(
        countColumnsWithXMAS("XSX\nXAXX\nXMXX\nXXXX\nXSX\nXAXX\nXMXX\nXXXX"),
      ).toBe(2);
    });
  });
});
