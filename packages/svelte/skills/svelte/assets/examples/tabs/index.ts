import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_iconsRaw from "./with-icons.svelte?raw";

export const imports = `import { Tabs } from "@pisagor/svelte/tabs";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Controlled: stripSvelteExample(controlledRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  OrientationHorizontal: stripSvelteExample(orientation_horizontalRaw),
  OrientationVertical: stripSvelteExample(orientation_verticalRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithIcons: stripSvelteExample(with_iconsRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithIcons } from "./with-icons.svelte";
