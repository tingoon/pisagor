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
