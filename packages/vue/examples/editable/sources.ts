import activation_clickRaw from "./activation-click.vue?raw";
import activation_focusRaw from "./activation-focus.vue?raw";
import activation_noneRaw from "./activation-none.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import dblclickRaw from "./dblclick.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_textareaRaw from "./with-textarea.vue?raw";
import without_controlsRaw from "./without-controls.vue?raw";

export const imports = `import { Editable } from "@pisagor/vue";`;

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
