import { describe, expect, it } from "vitest";
import { main } from "./part-2";

const exampleInput = `7 6 4 2 1\n1 2 7 8 9\n9 7 6 2 1\n1 3 2 4 5\n8 6 4 4 1\n1 3 6 7 9`;

describe("Day 2 Part 2", () => {
  describe("Test the global main function", () => {
    it("should return 2", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(4);
    });
  });
});
