import fs from "fs";
import { describe, expect, it } from "vitest";
import { main } from "./part-2";

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

describe("Day 6 Part 2", () => {
  describe("Test the global main function", () => {
    it("should return 6", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(6);
    });
  });
});
