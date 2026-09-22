import { stripVueExample } from "@pisagor/utils";
import close_behaviorRaw from "./close-behavior.ts?raw";
import custom_spacingRaw from "./custom-spacing.ts?raw";
import defaultRaw from "./default.ts?raw";
import insetRaw from "./inset.ts?raw";
import no_close_buttonRaw from "./no-close-button.ts?raw";
import non_modalRaw from "./non-modal.ts?raw";
import scroll_areaRaw from "./scroll-area.ts?raw";
import sidesRaw from "./sides.ts?raw";

export const imports = `import { Sheet } from "@pisagor/vue/sheet";`;

export const sources = {
  CloseBehavior: stripVueExample(close_behaviorRaw),
  CustomSpacing: stripVueExample(custom_spacingRaw),
  Default: stripVueExample(defaultRaw),
  Inset: stripVueExample(insetRaw),
  NoCloseButton: stripVueExample(no_close_buttonRaw),
  NonModal: stripVueExample(non_modalRaw),
  ScrollArea: stripVueExample(scroll_areaRaw),
  Sides: stripVueExample(sidesRaw),
} as const;

export { default as CloseBehavior } from "./close-behavior";
export { default as CustomSpacing } from "./custom-spacing";
export { default as Default } from "./default";
export { default as Inset } from "./inset";
export { default as NoCloseButton } from "./no-close-button";
export { default as NonModal } from "./non-modal";
export { default as ScrollArea } from "./scroll-area";
export { default as Sides } from "./sides";
