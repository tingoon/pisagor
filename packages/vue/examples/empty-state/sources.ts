import Compact from "./compact.vue?raw";
import Compound from "./compound.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Sizes from "./sizes.vue?raw";

export const imports = `import { EmptyState } from "@pisagor/vue";`;

export const sources = {
  Compact,
  Compound,
  CustomRecipe,
  Default,
  Sizes,
} as const;
