import { stripSvelteExample } from "@pisagor/utils";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import icon_groupRaw from "./icon-group.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_iconRaw from "./with-icon.svelte?raw";

export const imports = `import { Toggle } from "@pisagor/svelte";`;

export const sources = {
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  IconGroup: stripSvelteExample(icon_groupRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithIcon: stripSvelteExample(with_iconRaw),
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as IconGroup } from "./icon-group.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithIcon } from "./with-icon.svelte";
