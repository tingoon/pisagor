import { stripSvelteExample } from "@pisagor/utils";
import clearableRaw from "./clearable.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import fileRaw from "./file.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { Input } from "@pisagor/svelte";`;

export const sources = {
  Clearable: stripSvelteExample(clearableRaw),
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  File: stripSvelteExample(fileRaw),
  Invalid: stripSvelteExample(invalidRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Variants: stripSvelteExample(variantsRaw),
} as const;

export { default as Clearable } from "./clearable.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as File } from "./file.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
