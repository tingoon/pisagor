import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DisabledSource as Disabled } from "./disabled";
import { IconGroupSource as IconGroup } from "./icon-group";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithIconSource as WithIcon } from "./with-icon";

export const imports = `import { Toggle } from "@pisagor/react";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Disabled,
  IconGroup,
  Sizes,
  Variants,
  WithIcon,
} as const;
