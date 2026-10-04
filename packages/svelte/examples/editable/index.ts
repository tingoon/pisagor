import { stripSvelteExample } from "@pisagor/utils";
import activation_clickRaw from "./activation-click.svelte?raw";
import activation_focusRaw from "./activation-focus.svelte?raw";
import activation_noneRaw from "./activation-none.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
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
  ActivationClick: stripSvelteExample(activation_clickRaw),
  ActivationFocus: stripSvelteExample(activation_focusRaw),
  ActivationNone: stripSvelteExample(activation_noneRaw),
  Controlled: stripSvelteExample(controlledRaw),
  Dblclick: stripSvelteExample(dblclickRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  Invalid: stripSvelteExample(invalidRaw),
  OrientationHorizontal: stripSvelteExample(orientation_horizontalRaw),
  OrientationVertical: stripSvelteExample(orientation_verticalRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithoutControls: stripSvelteExample(without_controlsRaw),
  WithTextarea: stripSvelteExample(with_textareaRaw),
} as const;

export { default as ActivationClick } from "./activation-click.svelte";
export { default as ActivationFocus } from "./activation-focus.svelte";
export { default as ActivationNone } from "./activation-none.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as Dblclick } from "./dblclick.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithTextarea } from "./with-textarea.svelte";
export { default as WithoutControls } from "./without-controls.svelte";
