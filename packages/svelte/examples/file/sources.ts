import compoundRaw from "./compound.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import with_actionsRaw from "./with-actions.svelte?raw";

export const imports = `import { File } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WithActions: with_actionsRaw,
} as const;
