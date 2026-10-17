import CustomRecipe from "./custom-recipe.astro?raw";
import Nested from "./nested.astro?raw";
import Padding from "./padding.astro?raw";
import Variants from "./variants.astro?raw";

export const imports = `---
import { Surface } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  Nested,
  Padding,
  Variants,
} as const;
