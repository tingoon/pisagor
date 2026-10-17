import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import WrappedActions from "./wrapped-actions.svelte?raw";

export const imports = `import { Toolbar } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  WrappedActions,
} as const;
