import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_timeoutRaw from "./custom-timeout.vue?raw";
import different_iconRaw from "./different-icon.ts?raw";
import variantsRaw from "./variants.vue?raw";
import with_labelRaw from "./with-label.vue?raw";

export const imports = `import { Clipboard } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  CustomTimeout: custom_timeoutRaw,
  DifferentIcon: different_iconRaw,
  Variants: variantsRaw,
  WithLabel: with_labelRaw,
} as const;
