import activation_clickRaw from "./activation-click.tsx?raw";
import activation_focusRaw from "./activation-focus.tsx?raw";
import activation_noneRaw from "./activation-none.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import dblclickRaw from "./dblclick.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_textareaRaw from "./with-textarea.tsx?raw";
import without_controlsRaw from "./without-controls.tsx?raw";

export const imports = `import { Editable } from "@pisagor/react";`;

export const sources = {
  ActivationClick: activation_clickRaw,
  ActivationFocus: activation_focusRaw,
  ActivationNone: activation_noneRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Dblclick: dblclickRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithoutControls: without_controlsRaw,
  WithTextarea: with_textareaRaw,
} as const;
