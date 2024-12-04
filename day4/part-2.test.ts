import fs from "fs";
import { describe, expect, it } from "vitest";
import { main } from "./part-2";

const exampleInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

describe("Day 4 Part 2", () => {
  describe("Test the global main function", () => {
    it("should return 9", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(9);
    });
  });
});
