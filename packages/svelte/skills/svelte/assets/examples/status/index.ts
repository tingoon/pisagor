import { stripSvelteExample } from "@pisagor/utils";
import custom_colorRaw from "./custom-color.svelte?raw";
import custom_sizeRaw from "./custom-size.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_iconRaw from "./with-icon.svelte?raw";

export const imports = `import { Status } from "@pisagor/svelte/status";`;

export const sources = {
  CustomColor: stripSvelteExample(custom_colorRaw),
  CustomSize: stripSvelteExample(custom_sizeRaw),
  Default: stripSvelteExample(defaultRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithIcon: stripSvelteExample(with_iconRaw),
} as const;

export { default as CustomColor } from "./custom-color.svelte";
export { default as CustomSize } from "./custom-size.svelte";
export { default as Default } from "./default.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithIcon } from "./with-icon.svelte";
