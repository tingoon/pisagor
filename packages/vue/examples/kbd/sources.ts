import custom_recipeRaw from "./custom-recipe.vue?raw";
import kbd_groupRaw from "./kbd-group.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_buttonRaw from "./with-button.vue?raw";
import with_tooltipRaw from "./with-tooltip.ts?raw";

export const imports = `import { Kbd } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  KbdGroup: kbd_groupRaw,
  Variants: variantsRaw,
  WithButton: with_buttonRaw,
  WithTooltip: with_tooltipRaw,
} as const;
