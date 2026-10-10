import compoundRaw from "./compound.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_trendRaw from "./with-trend.vue?raw";

export const imports = `import { Stat } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Variants: variantsRaw,
  WithTrend: with_trendRaw,
} as const;
