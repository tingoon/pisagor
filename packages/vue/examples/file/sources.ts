import compoundRaw from "./compound.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import with_actionsRaw from "./with-actions.ts?raw";

export const imports = `import { File } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WithActions: with_actionsRaw,
} as const;
