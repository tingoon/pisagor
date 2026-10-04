import compositionRaw from "./composition.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { AlertDialog } from "@pisagor/svelte";`;

export const sources = {
  Composition: compositionRaw,
  Default: defaultRaw,
  Variants: variantsRaw,
} as const;

export { default as Composition } from "./composition.svelte";
export { default as Default } from "./default.svelte";
export { default as Variants } from "./variants.svelte";
