import fs from "fs";
import { describe, expect, it } from "vitest";
import { main } from "./part-1";

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

describe("Day 4 Part 1", () => {
  describe("Test the global main function", () => {
    it("should return 18", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(18);
    });
  });
});
