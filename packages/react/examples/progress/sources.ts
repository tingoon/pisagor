import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { IndeterminateSource as Indeterminate } from "./indeterminate";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";
import { WithLabelSource as WithLabel } from "./with-label";

export const imports = `import { Progress } from "@pisagor/react";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Indeterminate,
  OrientationHorizontal,
  OrientationVertical,
  WithLabel,
} as const;
