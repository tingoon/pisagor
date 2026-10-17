import Compound from "./compound.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import WithActions from "./with-actions.ts?raw";

export const imports = `import { File } from "@pisagor/vue";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  WithActions,
} as const;
