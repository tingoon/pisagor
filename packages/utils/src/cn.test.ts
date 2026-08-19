import { describe, expect, test } from "bun:test";
import { cn } from "./cn";

describe("cn", () => {
  test("merges class names", () => {
    expect(cn("px-2", "py-1")).toBe("px-2 py-1");
  });

  test("resolves conflicting Tailwind classes", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  test("ignores falsy values", () => {
    expect(cn("block", false && "hidden", null, undefined, "text-sm")).toBe("block text-sm");
  });
});
