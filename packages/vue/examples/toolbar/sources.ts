import compoundRaw from "./compound.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.ts?raw";
import wrapped_actionsRaw from "./wrapped-actions.ts?raw";

export const imports = `import { Toolbar } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WrappedActions: wrapped_actionsRaw,
} as const;
