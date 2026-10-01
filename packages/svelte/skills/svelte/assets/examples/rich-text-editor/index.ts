import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";

export const imports = `import { RichTextEditor } from "@pisagor/svelte/rich-text-editor";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Invalid: stripSvelteExample(invalidRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
