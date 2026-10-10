import custom_recipeRaw from "./custom-recipe.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";

export const imports = `import { Spinner } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Sizes: sizesRaw,
} as const;
