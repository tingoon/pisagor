import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithTrend from "./with-trend.svelte?raw";

export const imports = `import { Stat } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  Variants,
  WithTrend,
} as const;
