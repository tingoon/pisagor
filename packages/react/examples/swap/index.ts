import defaultRaw from "./default.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Swap } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  Variants: variantsRaw,
} as const;

export * from "./default";
export * from "./variants";
