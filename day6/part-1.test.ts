import fs from "fs";
import { describe, expect, it } from "vitest";
import { main } from "./part-1";

const exampleInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

describe("Day 6 Part 1", () => {
  describe("Test the global main function", () => {
    it("should return 41", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(41);
    });
  });
});
