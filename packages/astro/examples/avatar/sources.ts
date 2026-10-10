import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";
import fallbacksRaw from "./fallbacks.astro?raw";
import shapesRaw from "./shapes.astro?raw";
import sizesRaw from "./sizes.astro?raw";

export const imports = `---
import { Avatar } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Fallbacks: fallbacksRaw,
  Shapes: shapesRaw,
  Sizes: sizesRaw,
} as const;
