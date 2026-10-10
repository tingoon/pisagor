import activation_clickRaw from "./activation-click.svelte?raw";
import activation_focusRaw from "./activation-focus.svelte?raw";
import activation_noneRaw from "./activation-none.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import dblclickRaw from "./dblclick.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_textareaRaw from "./with-textarea.svelte?raw";
import without_controlsRaw from "./without-controls.svelte?raw";

export const imports = `import { Editable } from "@pisagor/svelte";`;

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
