import compoundRaw from "./compound.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import wrapped_actionsRaw from "./wrapped-actions.svelte?raw";

export const imports = `import { Toolbar } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WrappedActions: wrapped_actionsRaw,
} as const;
