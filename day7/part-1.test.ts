import fs from "fs";
import { describe, expect, it } from "vitest";
import { main } from "./part-1";

const exampleInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

describe("Day 7 Part 1", () => {
  describe("Test the global main function", () => {
    it("should return 3749", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(3749);
    });
  });
});
