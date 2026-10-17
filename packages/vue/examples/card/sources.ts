import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSpacing from "./custom-spacing.vue?raw";
import Default from "./default.vue?raw";
import Icon from "./icon.vue?raw";
import Product from "./product.vue?raw";
import Sizes from "./sizes.vue?raw";

export const imports = `import { Card } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  CustomSpacing,
  Default,
  Icon,
  Product,
  Sizes,
} as const;
