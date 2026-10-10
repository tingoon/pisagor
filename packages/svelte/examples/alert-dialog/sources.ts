import compositionRaw from "./composition.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { AlertDialog } from "@pisagor/svelte";`;

export const sources = {
  Composition: compositionRaw,
  Variants: variantsRaw,
} as const;
