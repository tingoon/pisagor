import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import indeterminateRaw from "./indeterminate.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import thicknessRaw from "./thickness.vue?raw";
import with_valueRaw from "./with-value.vue?raw";

export const imports = `import { CircularProgress } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  Sizes: sizesRaw,
  Thickness: thicknessRaw,
  WithValue: with_valueRaw,
} as const;
