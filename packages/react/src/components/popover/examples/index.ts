import { stripTsxExample } from "@pisagor/utils";
import anchorRaw from "./anchor.tsx?raw";
import close_behaviorRaw from "./close-behavior.tsx?raw";
import close_buttonRaw from "./close-button.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import modalRaw from "./modal.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import scroll_areaRaw from "./scroll-area.tsx?raw";

export const imports = `import { Popover } from "@pisagor/react/popover";`;

export const sources = {
  Anchor: stripTsxExample(anchorRaw),
  CloseBehavior: stripTsxExample(close_behaviorRaw),
  CloseButton: stripTsxExample(close_buttonRaw),
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  Modal: stripTsxExample(modalRaw),
  Nested: stripTsxExample(nestedRaw),
  Placements: stripTsxExample(placementsRaw),
  ScrollArea: stripTsxExample(scroll_areaRaw),
} as const;

export { Anchor } from "./anchor";
export { CloseBehavior } from "./close-behavior";
export { CloseButton } from "./close-button";
export { CustomSpacing } from "./custom-spacing";
export { Default } from "./default";
export { Modal } from "./modal";
export { Nested } from "./nested";
export { Placements } from "./placements";
export { ScrollArea } from "./scroll-area";
