import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Switch } from "@pisagor/solid";`;

export const sources = {
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;

export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./invalid";
export * from "./sizes";
export * from "./variants";
