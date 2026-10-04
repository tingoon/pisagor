import { stripTsxExample } from "@pisagor/utils";
import close_behaviorRaw from "./close-behavior.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import insetRaw from "./inset.tsx?raw";
import no_close_buttonRaw from "./no-close-button.tsx?raw";
import non_modalRaw from "./non-modal.tsx?raw";
import scroll_areaRaw from "./scroll-area.tsx?raw";
import sidesRaw from "./sides.tsx?raw";

export const imports = `import { Sheet } from "@pisagor/react";`;

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

export * from "./close-behavior";
export * from "./custom-spacing";
export * from "./default";
export * from "./inset";
export * from "./no-close-button";
export * from "./non-modal";
export * from "./scroll-area";
export * from "./sides";
