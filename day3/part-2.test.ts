import fs from "fs";
import { describe, expect, it } from "vitest";
import { main } from "./part-2";

const exampleInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

describe("Day 3 Part 2", () => {
  describe("Test the global main function", () => {
    it("should return true", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(48);
    });
  });
});
