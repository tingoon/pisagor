import { CustomColorSource as CustomColor } from "./custom-color";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { PillSource as Pill } from "./pill";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithLinkSource as WithLink } from "./with-link";
import { WithSpinnerSource as WithSpinner } from "./with-spinner";

export const imports = `import { Badge } from "@pisagor/react";`;

export const sources = {
  CustomColor,
  CustomRecipe,
  Pill,
  Sizes,
  Variants,
  WithLink,
  WithSpinner,
} as const;
