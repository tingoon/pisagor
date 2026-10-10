import custom_recipeRaw from "./custom-recipe.astro?raw";
import sizesRaw from "./sizes.astro?raw";

export const imports = `---
import { Spinner } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Sizes: sizesRaw,
} as const;
