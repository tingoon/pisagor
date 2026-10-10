import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import disabled_itemRaw from "./disabled-item.vue?raw";
import font_weightRaw from "./font-weight.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";
import singleRaw from "./single.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import spacingRaw from "./spacing.vue?raw";
import variantsRaw from "./variants.vue?raw";
import verticalRaw from "./vertical.vue?raw";

export const imports = `import { ToggleGroup } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
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
