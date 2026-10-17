import CustomRecipe from "./custom-recipe.astro?raw";
import Sizes from "./sizes.astro?raw";

export const imports = `---
import { Spinner } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  Sizes,
} as const;
