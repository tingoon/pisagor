import { CustomColorSource as CustomColor } from "./custom-color";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSizeSource as CustomSize } from "./custom-size";
import { DefaultSource as Default } from "./default";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithIconSource as WithIcon } from "./with-icon";

export const imports = `import { Status } from "@pisagor/react";`;

export const sources = {
  CustomColor,
  CustomRecipe,
  CustomSize,
  Default,
  Sizes,
  Variants,
  WithIcon,
} as const;
