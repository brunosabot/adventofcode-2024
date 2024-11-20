---
to: day<%= day %>/part-2.test.ts
---
import fs from "fs";
import { describe, expect, it } from "vitest";
import { main } from "./part-2.ts";

const input = fs.readFileSync("./day<%= day %>/input-2.txt").toString();

describe("Day <%= day %> Part 2", () => {
  describe("Test the global main function", () => {
    it("should return true", () => {
      expect(main(input)).resolves.toBe(true);
    });
  });
});
