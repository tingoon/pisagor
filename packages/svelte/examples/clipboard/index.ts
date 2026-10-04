import { stripSvelteExample } from "@pisagor/utils";
import controlledRaw from "./controlled.svelte?raw";
import custom_timeoutRaw from "./custom-timeout.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import different_iconRaw from "./different-icon.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_labelRaw from "./with-label.svelte?raw";

export const imports = `import { Clipboard } from "@pisagor/svelte";`;

export const sources = {
  Controlled: stripSvelteExample(controlledRaw),
  CustomTimeout: stripSvelteExample(custom_timeoutRaw),
  Default: stripSvelteExample(defaultRaw),
  DifferentIcon: stripSvelteExample(different_iconRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithLabel: stripSvelteExample(with_labelRaw),
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as CustomTimeout } from "./custom-timeout.svelte";
export { default as Default } from "./default.svelte";
export { default as DifferentIcon } from "./different-icon.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithLabel } from "./with-label.svelte";
