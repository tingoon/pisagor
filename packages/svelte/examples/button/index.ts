import { stripSvelteExample } from "@pisagor/utils";
import as_childRaw from "./as-child.svelte?raw";
import custom_colorRaw from "./custom-color.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import iconRaw from "./icon.svelte?raw";
import loadingRaw from "./loading.svelte?raw";
import no_click_effectRaw from "./no-click-effect.svelte?raw";
import pillRaw from "./pill.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_iconRaw from "./with-icon.svelte?raw";

export const imports = `import { Button } from "@pisagor/svelte";`;

export const sources = {
  AsChild: stripSvelteExample(as_childRaw),
  CustomColor: stripSvelteExample(custom_colorRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Icon: stripSvelteExample(iconRaw),
  Loading: stripSvelteExample(loadingRaw),
  NoClickEffect: stripSvelteExample(no_click_effectRaw),
  Pill: stripSvelteExample(pillRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithIcon: stripSvelteExample(with_iconRaw),
} as const;

export { default as AsChild } from "./as-child.svelte";
export { default as CustomColor } from "./custom-color.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Icon } from "./icon.svelte";
export { default as Loading } from "./loading.svelte";
export { default as NoClickEffect } from "./no-click-effect.svelte";
export { default as Pill } from "./pill.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithIcon } from "./with-icon.svelte";
