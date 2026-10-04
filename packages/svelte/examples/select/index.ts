import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import emptyRaw from "./empty.svelte?raw";
import groupingRaw from "./grouping.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import max_selectionRaw from "./max-selection.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_scrollRaw from "./with-scroll.svelte?raw";

export const imports = `import { Select } from "@pisagor/svelte/select";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Empty: stripSvelteExample(emptyRaw),
  Grouping: stripSvelteExample(groupingRaw),
  Invalid: stripSvelteExample(invalidRaw),
  MaxSelection: stripSvelteExample(max_selectionRaw),
  Multiple: stripSvelteExample(multipleRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithScroll: stripSvelteExample(with_scrollRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Empty } from "./empty.svelte";
export { default as Grouping } from "./grouping.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as MaxSelection } from "./max-selection.svelte";
export { default as Multiple } from "./multiple.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithScroll } from "./with-scroll.svelte";
