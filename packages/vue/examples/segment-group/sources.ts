import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_indicatorRaw from "./custom-indicator.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import disabled_itemRaw from "./disabled-item.vue?raw";
import indicator_on_hoverRaw from "./indicator-on-hover.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { SegmentGroup } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomIndicator: custom_indicatorRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  DisabledItem: disabled_itemRaw,
  IndicatorOnHover: indicator_on_hoverRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  Variants: variantsRaw,
} as const;
