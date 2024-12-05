import fs from "fs";
import { describe, expect, it } from "vitest";
import { main } from "./part-2";

const exampleInput = `47|53\n97|13\n97|61\n97|47\n75|29\n61|13\n75|53\n29|13\n97|29\n53|29\n61|53\n97|53\n61|29\n47|13\n75|47\n97|75\n47|61\n75|61\n47|29\n75|13\n53|13\n\n75,47,61,53,29\n97,61,53,29,13\n75,29,13\n75,97,47,61,53\n61,13,29\n97,13,75,29,47`;

describe("Day 5 Part 2", () => {
  describe("Test the global main function", () => {
    it("should return 123", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(123);
    });
  });
});
