import anchorRaw from "./anchor.ts?raw";
import close_behaviorRaw from "./close-behavior.ts?raw";
import close_buttonRaw from "./close-button.ts?raw";
import custom_spacingRaw from "./custom-spacing.ts?raw";
import defaultRaw from "./default.ts?raw";
import modalRaw from "./modal.ts?raw";
import nestedRaw from "./nested.ts?raw";
import placementsRaw from "./placements.ts?raw";
import scroll_areaRaw from "./scroll-area.ts?raw";

export const imports = `import { Popover } from "@pisagor/vue";`;

export const sources = {
  Anchor: anchorRaw,
  CloseBehavior: close_behaviorRaw,
  CloseButton: close_buttonRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Modal: modalRaw,
  Nested: nestedRaw,
  Placements: placementsRaw,
  ScrollArea: scroll_areaRaw,
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
