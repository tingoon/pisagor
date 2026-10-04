import { stripSvelteExample } from "@pisagor/utils";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import partial_collapseRaw from "./partial-collapse.svelte?raw";

export const imports = `import { Collapsible } from "@pisagor/svelte/collapsible";`;

export const sources = {
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Nested: stripSvelteExample(nestedRaw),
  PartialCollapse: stripSvelteExample(partial_collapseRaw),
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Nested } from "./nested.svelte";
export { default as PartialCollapse } from "./partial-collapse.svelte";
