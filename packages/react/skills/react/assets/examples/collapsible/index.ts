import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import partial_collapseRaw from "./partial-collapse.tsx?raw";

export const imports = `import { Collapsible } from "@pisagor/react/collapsible";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Nested: stripTsxExample(nestedRaw),
  PartialCollapse: stripTsxExample(partial_collapseRaw),
} as const;

export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Nested } from "./nested";
export { PartialCollapse } from "./partial-collapse";
