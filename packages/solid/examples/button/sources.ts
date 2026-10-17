import { AsChildSource as AsChild } from "./as-child";
import { CustomColorSource as CustomColor } from "./custom-color";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DisabledSource as Disabled } from "./disabled";
import { IconSource as Icon } from "./icon";
import { LoadingSource as Loading } from "./loading";
import { NoClickEffectSource as NoClickEffect } from "./no-click-effect";
import { PillSource as Pill } from "./pill";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithIconSource as WithIcon } from "./with-icon";

export const imports = `import { Button } from "@pisagor/solid";`;

export const sources = {
  AsChild,
  CustomColor,
  CustomRecipe,
  Disabled,
  Icon,
  Loading,
  NoClickEffect,
  Pill,
  Sizes,
  Variants,
  WithIcon,
} as const;
