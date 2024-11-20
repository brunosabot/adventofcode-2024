---
to: day<%= day %>/part-1.test.ts
---
import fs from "fs";
import { describe, expect, it } from "vitest";
import { main } from "./part-1.ts";

const input = fs.readFileSync("./day<%= day %>/input-1.txt").toString();

describe("Day <%= day %> Part 1", () => {
  describe("Test the global main function", () => {
    it("should return true", () => {
      expect(main(input)).resolves.toBe(true);
    });
  });
});
