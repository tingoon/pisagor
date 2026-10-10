import compactRaw from "./compact.vue?raw";
import compoundRaw from "./compound.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";

export const imports = `import { EmptyState } from "@pisagor/vue";`;

export const sources = {
  Compact: compactRaw,
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
} as const;
