import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Swap } from "@pisagor/react";`;

export const sources = {
  Variants: variantsRaw,
} as const;
