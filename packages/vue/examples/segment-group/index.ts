import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_indicatorRaw from "./custom-indicator.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import disabled_itemRaw from "./disabled-item.vue?raw";
import indicator_on_hoverRaw from "./indicator-on-hover.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { SegmentGroup } from "@pisagor/vue/segment-group";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Controlled: stripVueExample(controlledRaw),
  CustomIndicator: stripVueExample(custom_indicatorRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  DisabledItem: stripVueExample(disabled_itemRaw),
  IndicatorOnHover: stripVueExample(indicator_on_hoverRaw),
  OrientationHorizontal: stripVueExample(orientation_horizontalRaw),
  OrientationVertical: stripVueExample(orientation_verticalRaw),
  Variants: stripVueExample(variantsRaw),
} as const;

export { default as Compound } from "./compound.vue";
export { default as Controlled } from "./controlled.vue";
export { default as CustomIndicator } from "./custom-indicator.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as DisabledItem } from "./disabled-item.vue";
export { default as IndicatorOnHover } from "./indicator-on-hover.vue";
export { default as OrientationHorizontal } from "./orientation-horizontal.vue";
export { default as OrientationVertical } from "./orientation-vertical.vue";
export { default as Variants } from "./variants.vue";
