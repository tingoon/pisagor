import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";
import indeterminateRaw from "./indeterminate.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import thicknessRaw from "./thickness.astro?raw";
import with_valueRaw from "./with-value.astro?raw";

export const imports = `---
import { CircularProgress } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  Sizes: sizesRaw,
  Thickness: thicknessRaw,
  WithValue: with_valueRaw,
} as const;
