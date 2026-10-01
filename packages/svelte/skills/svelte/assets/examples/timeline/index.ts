import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import horizontalRaw from "./horizontal.svelte?raw";

export const imports = `import { Timeline } from "@pisagor/svelte/timeline";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Default: stripSvelteExample(defaultRaw),
  Horizontal: stripSvelteExample(horizontalRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Default } from "./default.svelte";
export { default as Horizontal } from "./horizontal.svelte";
