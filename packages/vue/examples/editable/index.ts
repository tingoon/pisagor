import { stripVueExample } from "@pisagor/utils";
import activation_clickRaw from "./activation-click.vue?raw";
import activation_focusRaw from "./activation-focus.vue?raw";
import activation_noneRaw from "./activation-none.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import dblclickRaw from "./dblclick.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_textareaRaw from "./with-textarea.vue?raw";
import without_controlsRaw from "./without-controls.vue?raw";

export const imports = `import { Editable } from "@pisagor/vue/editable";`;

export const sources = {
  ActivationClick: stripVueExample(activation_clickRaw),
  ActivationFocus: stripVueExample(activation_focusRaw),
  ActivationNone: stripVueExample(activation_noneRaw),
  Controlled: stripVueExample(controlledRaw),
  Dblclick: stripVueExample(dblclickRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Invalid: stripVueExample(invalidRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  OrientationHorizontal: stripVueExample(orientation_horizontalRaw),
  OrientationVertical: stripVueExample(orientation_verticalRaw),
  Sizes: stripVueExample(sizesRaw),
  Variants: stripVueExample(variantsRaw),
  WithoutControls: stripVueExample(without_controlsRaw),
  WithTextarea: stripVueExample(with_textareaRaw),
} as const;

export { default as ActivationClick } from "./activation-click.vue";
export { default as ActivationFocus } from "./activation-focus.vue";
export { default as ActivationNone } from "./activation-none.vue";
export { default as Controlled } from "./controlled.vue";
export { default as Dblclick } from "./dblclick.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Invalid } from "./invalid.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as OrientationHorizontal } from "./orientation-horizontal.vue";
export { default as OrientationVertical } from "./orientation-vertical.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
export { default as WithTextarea } from "./with-textarea.vue";
export { default as WithoutControls } from "./without-controls.vue";
