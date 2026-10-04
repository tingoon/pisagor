import autoresizeRaw from "./autoresize.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Textarea } from "@pisagor/react";`;

export const sources = {
  Autoresize: autoresizeRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Variants: variantsRaw,
} as const;

export * from "./autoresize";
export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./invalid";
export * from "./variants";
