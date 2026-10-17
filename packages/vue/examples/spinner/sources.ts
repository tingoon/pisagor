import CustomRecipe from "./custom-recipe.vue?raw";
import Sizes from "./sizes.vue?raw";

export const imports = `import { Spinner } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Sizes,
} as const;
