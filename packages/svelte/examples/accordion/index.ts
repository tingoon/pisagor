import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import non_collapsibleRaw from "./non-collapsible.svelte?raw";
import with_cardRaw from "./with-card.svelte?raw";

export const imports = `import { Accordion } from "@pisagor/svelte";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Multiple: stripSvelteExample(multipleRaw),
  NonCollapsible: stripSvelteExample(non_collapsibleRaw),
  WithCard: stripSvelteExample(with_cardRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Multiple } from "./multiple.svelte";
export { default as NonCollapsible } from "./non-collapsible.svelte";
export { default as WithCard } from "./with-card.svelte";
