import anchorRaw from "./anchor.tsx?raw";
import close_behaviorRaw from "./close-behavior.tsx?raw";
import close_buttonRaw from "./close-button.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import modalRaw from "./modal.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import scroll_areaRaw from "./scroll-area.tsx?raw";

export const imports = `import { Popover } from "@pisagor/react";`;

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

export * from "./anchor";
export * from "./close-behavior";
export * from "./close-button";
export * from "./custom-spacing";
export * from "./default";
export * from "./modal";
export * from "./nested";
export * from "./placements";
export * from "./scroll-area";
