import { stripTsxExample } from "@pisagor/utils";
import close_behaviorRaw from "./close-behavior.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import insetRaw from "./inset.tsx?raw";
import no_close_buttonRaw from "./no-close-button.tsx?raw";
import non_modalRaw from "./non-modal.tsx?raw";
import scroll_areaRaw from "./scroll-area.tsx?raw";
import sidesRaw from "./sides.tsx?raw";

export const imports = `import { Sheet } from "@pisagor/react/sheet";`;

export const sources = {
  CloseBehavior: stripTsxExample(close_behaviorRaw),
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  Inset: stripTsxExample(insetRaw),
  NoCloseButton: stripTsxExample(no_close_buttonRaw),
  NonModal: stripTsxExample(non_modalRaw),
  ScrollArea: stripTsxExample(scroll_areaRaw),
  Sides: stripTsxExample(sidesRaw),
} as const;

export { CloseBehavior } from "./close-behavior";
export { CustomSpacing } from "./custom-spacing";
export { Default } from "./default";
export { Inset } from "./inset";
export { NoCloseButton } from "./no-close-button";
export { NonModal } from "./non-modal";
export { ScrollArea } from "./scroll-area";
export { Sides } from "./sides";
