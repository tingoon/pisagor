import { stripTsxExample } from "@pisagor/utils";
import autoresizeRaw from "./autoresize.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Textarea } from "@pisagor/solid";`;

export const sources = {
  Autoresize: stripTsxExample(autoresizeRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export * from "./autoresize";
export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./invalid";
export * from "./variants";
