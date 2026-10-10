import custom_recipeRaw from "./custom-recipe.astro?raw";
import custom_styleRaw from "./custom-style.astro?raw";
import defaultRaw from "./default.astro?raw";
import multipleRaw from "./multiple.astro?raw";

export const imports = `---
import { Highlight } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomStyle: custom_styleRaw,
  Default: defaultRaw,
  Multiple: multipleRaw,
} as const;
