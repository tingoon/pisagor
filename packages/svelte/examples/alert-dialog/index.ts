import { stripSvelteExample } from "@pisagor/utils";
import compositionRaw from "./composition.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { AlertDialog } from "@pisagor/svelte";`;

export const sources = {
  Composition: stripSvelteExample(compositionRaw),
  Default: stripSvelteExample(defaultRaw),
  Variants: stripSvelteExample(variantsRaw),
} as const;

export { default as Composition } from "./composition.svelte";
export { default as Default } from "./default.svelte";
export { default as Variants } from "./variants.svelte";
