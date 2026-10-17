import Compound from "./compound.astro?raw";
import CustomRecipe from "./custom-recipe.astro?raw";
import Default from "./default.astro?raw";
import Variants from "./variants.astro?raw";
import WithTrend from "./with-trend.astro?raw";

export const imports = `---
import { Stat } from "@pisagor/astro";
---`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  Variants,
  WithTrend,
} as const;
