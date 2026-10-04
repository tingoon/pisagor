import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import groupRaw from "./group.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_clear_buttonRaw from "./with-clear-button.svelte?raw";
import with_start_iconRaw from "./with-start-icon.svelte?raw";
import with_triggerRaw from "./with-trigger.svelte?raw";

export const imports = `import { Autocomplete } from "@pisagor/svelte";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Group: stripSvelteExample(groupRaw),
  Invalid: stripSvelteExample(invalidRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithClearButton: stripSvelteExample(with_clear_buttonRaw),
  WithStartIcon: stripSvelteExample(with_start_iconRaw),
  WithTrigger: stripSvelteExample(with_triggerRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Group } from "./group.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithClearButton } from "./with-clear-button.svelte";
export { default as WithStartIcon } from "./with-start-icon.svelte";
export { default as WithTrigger } from "./with-trigger.svelte";
