import clearableRaw from "./clearable.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import fileRaw from "./file.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Input } from "@pisagor/solid";`;

export const sources = {
  Clearable: clearableRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  File: fileRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;

export * from "./clearable";
export * from "./controlled";
export * from "./default";
export * from "./disabled";
export * from "./file";
export * from "./invalid";
export * from "./sizes";
export * from "./variants";
