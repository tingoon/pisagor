import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import disabled_itemRaw from "./disabled-item.svelte?raw";
import font_weightRaw from "./font-weight.svelte?raw";
import horizontalRaw from "./horizontal.svelte?raw";
import singleRaw from "./single.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import spacingRaw from "./spacing.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import verticalRaw from "./vertical.svelte?raw";

export const imports = `import { ToggleGroup } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  DisabledItem: disabled_itemRaw,
  FontWeight: font_weightRaw,
  Horizontal: horizontalRaw,
  Single: singleRaw,
  Sizes: sizesRaw,
  Spacing: spacingRaw,
  Variants: variantsRaw,
  Vertical: verticalRaw,
} as const;

export { default as Compound } from "./compound.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as DisabledItem } from "./disabled-item.svelte";
export { default as FontWeight } from "./font-weight.svelte";
export { default as Horizontal } from "./horizontal.svelte";
export { default as Single } from "./single.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Spacing } from "./spacing.svelte";
export { default as Variants } from "./variants.svelte";
export { default as Vertical } from "./vertical.svelte";
