import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import fallbackRaw from "./fallback.svelte?raw";

export const imports = `import { ClientOnly } from "@pisagor/svelte";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  Fallback: stripSvelteExample(fallbackRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as Fallback } from "./fallback.svelte";
