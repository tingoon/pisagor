import { ActivationClickSource as ActivationClick } from "./activation-click";
import { ActivationFocusSource as ActivationFocus } from "./activation-focus";
import { ActivationNoneSource as ActivationNone } from "./activation-none";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DblclickSource as Dblclick } from "./dblclick";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithoutControlsSource as WithoutControls } from "./without-controls";
import { WithTextareaSource as WithTextarea } from "./with-textarea";

export const imports = `import { Editable } from "@pisagor/react";`;

export const sources = {
  ActivationClick,
  ActivationFocus,
  ActivationNone,
  Controlled,
  CustomRecipe,
  Dblclick,
  Default,
  Disabled,
  Invalid,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  Variants,
  WithoutControls,
  WithTextarea,
} as const;
