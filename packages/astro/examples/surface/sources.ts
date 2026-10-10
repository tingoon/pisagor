import custom_recipeRaw from "./custom-recipe.astro?raw";
import nestedRaw from "./nested.astro?raw";
import paddingRaw from "./padding.astro?raw";
import variantsRaw from "./variants.astro?raw";

export const imports = `---
import { Surface } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Nested: nestedRaw,
  Padding: paddingRaw,
  Variants: variantsRaw,
} as const;
