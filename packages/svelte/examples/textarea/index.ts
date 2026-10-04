import { stripSvelteExample } from "@pisagor/utils";
import autoresizeRaw from "./autoresize.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { Textarea } from "@pisagor/svelte/textarea";`;

export const sources = {
  Autoresize: stripSvelteExample(autoresizeRaw),
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Invalid: stripSvelteExample(invalidRaw),
  Variants: stripSvelteExample(variantsRaw),
} as const;

export { default as Autoresize } from "./autoresize.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Variants } from "./variants.svelte";
