import Compound from "./compound.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Variants from "./variants.vue?raw";
import WithTrend from "./with-trend.vue?raw";

export const imports = `import { Stat } from "@pisagor/vue";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  Variants,
  WithTrend,
} as const;
