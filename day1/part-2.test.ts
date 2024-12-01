import { describe, expect, it } from "vitest";
import { main } from "./part-2";

const exampleInput = `3   4\n4   3\n2   5\n1   3\n3   9\n3   3`;

describe("Day 1 Part 1", () => {
  describe("Test the global main function with example", () => {
    it("should return 11", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(31);
    });
  });
});
