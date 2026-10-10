import compoundRaw from "./compound.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_trendRaw from "./with-trend.tsx?raw";

export const imports = `import { Stat } from "@pisagor/solid";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Variants: variantsRaw,
  WithTrend: with_trendRaw,
} as const;
