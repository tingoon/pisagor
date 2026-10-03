import { stripSvelteExample } from "@pisagor/utils";
import compactRaw from "./compact.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import defaultRaw from "./default.svelte?raw";

export const imports = `import { EmptyState } from "@pisagor/svelte/empty-state";`;

export const sources = {
  Compact: stripSvelteExample(compactRaw),
  Compound: stripSvelteExample(compoundRaw),
  Default: stripSvelteExample(defaultRaw),
} as const;

export { default as Compact } from "./compact.svelte";
export { default as Compound } from "./compound.svelte";
export { default as Default } from "./default.svelte";
