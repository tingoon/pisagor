import { CompoundSource as Compound } from "./compound";
import { CustomColorSource as CustomColor } from "./custom-color";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { VariantsSource as Variants } from "./variants";
import { WithActionSource as WithAction } from "./with-action";
import { WithIconSource as WithIcon } from "./with-icon";
import { WithoutIconSource as WithoutIcon } from "./without-icon";

export const imports = `import { Alert } from "@pisagor/react";`;

export const sources = {
  Compound,
  CustomColor,
  CustomRecipe,
  Variants,
  WithAction,
  WithIcon,
  WithoutIcon,
} as const;
