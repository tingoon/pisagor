import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { KbdGroupSource as KbdGroup } from "./kbd-group";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithButtonSource as WithButton } from "./with-button";
import { WithTooltipSource as WithTooltip } from "./with-tooltip";

export const imports = `import { Kbd } from "@pisagor/react";`;

export const sources = {
  CustomRecipe,
  KbdGroup,
  Sizes,
  Variants,
  WithButton,
  WithTooltip,
} as const;
