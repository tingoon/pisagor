import compoundRaw from "./compound.astro?raw";
import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_trendRaw from "./with-trend.astro?raw";

export const imports = `---
import { Stat } from "@pisagor/astro";
---`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Variants: variantsRaw,
  WithTrend: with_trendRaw,
} as const;
