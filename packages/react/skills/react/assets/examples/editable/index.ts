import { stripTsxExample } from "@pisagor/utils";
import activation_clickRaw from "./activation-click.tsx?raw";
import activation_focusRaw from "./activation-focus.tsx?raw";
import activation_noneRaw from "./activation-none.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
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

export const imports = `import { Editable } from "@pisagor/react/editable";`;

export const sources = {
  ActivationClick: stripTsxExample(activation_clickRaw),
  ActivationFocus: stripTsxExample(activation_focusRaw),
  ActivationNone: stripTsxExample(activation_noneRaw),
  Controlled: stripTsxExample(controlledRaw),
  Dblclick: stripTsxExample(dblclickRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
  WithoutControls: stripTsxExample(without_controlsRaw),
  WithTextarea: stripTsxExample(with_textareaRaw),
} as const;

export { ActivationClick } from "./activation-click";
export { ActivationFocus } from "./activation-focus";
export { ActivationNone } from "./activation-none";
export { Controlled } from "./controlled";
export { Dblclick } from "./dblclick";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { OrientationHorizontal } from "./orientation-horizontal";
export { OrientationVertical } from "./orientation-vertical";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithTextarea } from "./with-textarea";
export { WithoutControls } from "./without-controls";
