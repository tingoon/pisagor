import compositionRaw from "./composition.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { AlertDialog } from "@pisagor/solid";`;

export const sources = {
  Composition: compositionRaw,
  Default: defaultRaw,
  Variants: variantsRaw,
} as const;

export * from "./composition";
export * from "./default";
export * from "./variants";
