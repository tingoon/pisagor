import custom_recipeRaw from "./custom-recipe.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { Spinner } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Sizes: sizesRaw,
} as const;
