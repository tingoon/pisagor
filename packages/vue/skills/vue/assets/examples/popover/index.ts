import { stripVueExample } from "@pisagor/utils";
import anchorRaw from "./anchor.ts?raw";
import close_behaviorRaw from "./close-behavior.ts?raw";
import close_buttonRaw from "./close-button.ts?raw";
import custom_spacingRaw from "./custom-spacing.ts?raw";
import defaultRaw from "./default.ts?raw";
import modalRaw from "./modal.ts?raw";
import nestedRaw from "./nested.ts?raw";
import placementsRaw from "./placements.ts?raw";
import scroll_areaRaw from "./scroll-area.ts?raw";

export const imports = `import { Popover } from "@pisagor/vue/popover";`;

export const sources = {
  Anchor: stripVueExample(anchorRaw),
  CloseBehavior: stripVueExample(close_behaviorRaw),
  CloseButton: stripVueExample(close_buttonRaw),
  CustomSpacing: stripVueExample(custom_spacingRaw),
  Default: stripVueExample(defaultRaw),
  Modal: stripVueExample(modalRaw),
  Nested: stripVueExample(nestedRaw),
  Placements: stripVueExample(placementsRaw),
  ScrollArea: stripVueExample(scroll_areaRaw),
} as const;

export { default as Anchor } from "./anchor";
export { default as CloseBehavior } from "./close-behavior";
export { default as CloseButton } from "./close-button";
export { default as CustomSpacing } from "./custom-spacing";
export { default as Default } from "./default";
export { default as Modal } from "./modal";
export { default as Nested } from "./nested";
export { default as Placements } from "./placements";
export { default as ScrollArea } from "./scroll-area";
