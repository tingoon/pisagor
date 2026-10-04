import { stripSvelteExample } from "@pisagor/utils";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_indicatorRaw from "./custom-indicator.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import disabled_itemRaw from "./disabled-item.svelte?raw";
import indicator_on_hoverRaw from "./indicator-on-hover.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { SegmentGroup } from "@pisagor/svelte/segment-group";`;

export const sources = {
  Compound: stripSvelteExample(compoundRaw),
  Controlled: stripSvelteExample(controlledRaw),
  CustomIndicator: stripSvelteExample(custom_indicatorRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  DisabledItem: stripSvelteExample(disabled_itemRaw),
  IndicatorOnHover: stripSvelteExample(indicator_on_hoverRaw),
  OrientationHorizontal: stripSvelteExample(orientation_horizontalRaw),
  OrientationVertical: stripSvelteExample(orientation_verticalRaw),
  Variants: stripSvelteExample(variantsRaw),
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as CustomIndicator } from "./custom-indicator.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as DisabledItem } from "./disabled-item.svelte";
export { default as IndicatorOnHover } from "./indicator-on-hover.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
export { default as Variants } from "./variants.svelte";
