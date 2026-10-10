import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";
import iconRaw from "./icon.vue?raw";
import productRaw from "./product.vue?raw";

export const imports = `import { Card } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Icon: iconRaw,
  Product: productRaw,
} as const;
