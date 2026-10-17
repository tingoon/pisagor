import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { VariantsSource as Variants } from "./variants";
import { WithTrendSource as WithTrend } from "./with-trend";

export const imports = `import { Stat } from "@pisagor/solid";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  Variants,
  WithTrend,
} as const;
