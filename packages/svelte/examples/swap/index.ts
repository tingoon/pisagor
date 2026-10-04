import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { Swap } from "@pisagor/svelte/swap";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  Variants: stripSvelteExample(variantsRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as Variants } from "./variants.svelte";
