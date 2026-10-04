import defaultRaw from "./default.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { Swap } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  Variants: variantsRaw,
} as const;

export { default as Default } from "./default.svelte";
export { default as Variants } from "./variants.svelte";
