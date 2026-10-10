import compositionRaw from "./composition.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { AlertDialog } from "@pisagor/react";`;

export const sources = {
  Composition: compositionRaw,
  Variants: variantsRaw,
} as const;
