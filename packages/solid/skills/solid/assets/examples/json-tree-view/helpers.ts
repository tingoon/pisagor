export function defaultData() {
  return {
    active: true,
    count: 3,
    nested: { items: ["a", "b"], meta: { version: 1 } },
    title: "Example",
  };
}

export function dataTypesData() {
  return {
    bigint: 10n,
    bool: false,
    date: new Date("2024-01-01"),
    nil: null,
    num: 42,
    str: "hello",
    undef: undefined,
  };
}

export function mapSetData() {
  return {
    map: new Map([
      ["a", 1],
      ["b", 2],
    ]),
    set: new Set(["x", "y", "z"]),
  };
}

export function expandDepthData() {
  return {
    level1: {
      level2: {
        level3: {
          level4: { value: "deep" },
        },
      },
    },
  };
}
