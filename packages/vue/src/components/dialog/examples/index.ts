import { stripVueExample } from "@pisagor/utils";
import close_behaviorRaw from "./close-behavior.ts?raw";
import custom_spacingRaw from "./custom-spacing.ts?raw";
import defaultRaw from "./default.ts?raw";
import initial_focusRaw from "./initial-focus.ts?raw";
import nestedRaw from "./nested.ts?raw";
import no_close_buttonRaw from "./no-close-button.ts?raw";
import non_modalRaw from "./non-modal.ts?raw";
import scroll_areaRaw from "./scroll-area.ts?raw";

export const imports = `import { Dialog } from "@pisagor/vue/dialog";`;

export const sources = {
  CloseBehavior: stripVueExample(close_behaviorRaw),
  CustomSpacing: stripVueExample(custom_spacingRaw),
  Default: stripVueExample(defaultRaw),
  InitialFocus: stripVueExample(initial_focusRaw),
  Nested: stripVueExample(nestedRaw),
  NoCloseButton: stripVueExample(no_close_buttonRaw),
  NonModal: stripVueExample(non_modalRaw),
  ScrollArea: stripVueExample(scroll_areaRaw),
} as const;

export { default as CloseBehavior } from "./close-behavior";
export { default as CustomSpacing } from "./custom-spacing";
export { default as Default } from "./default";
export { default as InitialFocus } from "./initial-focus";
export { default as Nested } from "./nested";
export { default as NoCloseButton } from "./no-close-button";
export { default as NonModal } from "./non-modal";
export { default as ScrollArea } from "./scroll-area";
