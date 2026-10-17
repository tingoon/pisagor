import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithIconsSource as WithIcons } from "./with-icons";
import { WithoutIndicatorSource as WithoutIndicator } from "./without-indicator";

export const imports = `import { Tabs } from "@pisagor/solid";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  Variants,
  WithIcons,
  WithoutIndicator,
} as const;
