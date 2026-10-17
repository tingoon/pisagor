import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomTimeoutSource as CustomTimeout } from "./custom-timeout";
import { DifferentIconSource as DifferentIcon } from "./different-icon";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithLabelSource as WithLabel } from "./with-label";

export const imports = `import { Clipboard } from "@pisagor/solid";`;

export const sources = {
  Controlled,
  CustomRecipe,
  CustomTimeout,
  DifferentIcon,
  Sizes,
  Variants,
  WithLabel,
} as const;
