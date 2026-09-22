import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import disabled_itemRaw from "./disabled-item.vue?raw";
import font_weightRaw from "./font-weight.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";
import singleRaw from "./single.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import spacingRaw from "./spacing.vue?raw";
import variantsRaw from "./variants.vue?raw";
import verticalRaw from "./vertical.vue?raw";

export const imports = `import { ToggleGroup } from "@pisagor/vue/toggle-group";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Controlled: stripVueExample(controlledRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  DisabledItem: stripVueExample(disabled_itemRaw),
  FontWeight: stripVueExample(font_weightRaw),
  Horizontal: stripVueExample(horizontalRaw),
  Single: stripVueExample(singleRaw),
  Sizes: stripVueExample(sizesRaw),
  Spacing: stripVueExample(spacingRaw),
  Variants: stripVueExample(variantsRaw),
  Vertical: stripVueExample(verticalRaw),
} as const;

export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as DisabledItem } from "./disabled-item.vue";
export { default as FontWeight } from "./font-weight.vue";
export { default as Horizontal } from "./horizontal.vue";
export { default as Single } from "./single.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Spacing } from "./spacing.vue";
export { default as Variants } from "./variants.vue";
export { default as Vertical } from "./vertical.vue";
