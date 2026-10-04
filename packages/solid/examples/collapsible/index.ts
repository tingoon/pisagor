import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import partial_collapseRaw from "./partial-collapse.tsx?raw";

export const imports = `import { Collapsible } from "@pisagor/solid";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Nested: stripTsxExample(nestedRaw),
  PartialCollapse: stripTsxExample(partial_collapseRaw),
} as const;

export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./nested";
export * from "./partial-collapse";
