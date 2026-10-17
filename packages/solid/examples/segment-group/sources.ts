import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomIndicatorSource as CustomIndicator } from "./custom-indicator";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { DisabledItemSource as DisabledItem } from "./disabled-item";
import { IndicatorOnHoverSource as IndicatorOnHover } from "./indicator-on-hover";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { SegmentGroup } from "@pisagor/solid";`;

export const sources = {
  Compound,
  Controlled,
  CustomIndicator,
  CustomRecipe,
  Default,
  Disabled,
  DisabledItem,
  IndicatorOnHover,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  Variants,
} as const;
