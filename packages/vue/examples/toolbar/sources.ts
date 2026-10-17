import Compound from "./compound.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.ts?raw";
import WrappedActions from "./wrapped-actions.ts?raw";

export const imports = `import { Toolbar } from "@pisagor/vue";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  WrappedActions,
} as const;
