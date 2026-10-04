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
  CloseBehavior: close_behaviorRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Inset: insetRaw,
  NoCloseButton: no_close_buttonRaw,
  NonModal: non_modalRaw,
  ScrollArea: scroll_areaRaw,
  Sides: sidesRaw,
} as const;

export * from "./close-behavior";
export * from "./custom-spacing";
export * from "./default";
export * from "./inset";
export * from "./no-close-button";
export * from "./non-modal";
export * from "./scroll-area";
export * from "./sides";
