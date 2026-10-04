import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import horizontalRaw from "./horizontal.svelte?raw";
import without_handleRaw from "./without-handle.svelte?raw";

export const imports = `import { Sortable } from "@pisagor/svelte/sortable";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Horizontal: stripSvelteExample(horizontalRaw),
  WithoutHandle: stripSvelteExample(without_handleRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Horizontal } from "./horizontal.svelte";
export { default as WithoutHandle } from "./without-handle.svelte";
