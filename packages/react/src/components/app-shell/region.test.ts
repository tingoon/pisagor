import { describe, expect, test } from "bun:test";
import { gridAreaFor, mergeResizableProps, regionVarFor } from "./region";

describe("regionVarFor", () => {
  test("builds CSS custom property names for placement and region", () => {
    expect(regionVarFor("start", "rail")).toBe("--app-shell-start-rail-width");
    expect(regionVarFor("end", "inspector")).toBe("--app-shell-end-inspector-width");
  });
});

describe("gridAreaFor", () => {
  test("builds grid area tokens for placement and region", () => {
    expect(gridAreaFor("start", "panel")).toBe("start-panel");
    expect(gridAreaFor("end", "rail")).toBe("end-rail");
  });
});

describe("mergeResizableProps", () => {
  test("returns defaults when override is omitted", () => {
    expect(mergeResizableProps({ enabled: true, handlePosition: "top" })).toEqual({
      enabled: true,
      handlePosition: "top",
    });
  });

  test("overrides only provided fields", () => {
    expect(
      mergeResizableProps({ enabled: true, handlePosition: "top" }, { enabled: false }),
    ).toEqual({
      enabled: false,
      handlePosition: "top",
    });
  });
});
