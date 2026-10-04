import close_behaviorRaw from "./close-behavior.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import initial_focusRaw from "./initial-focus.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import no_close_buttonRaw from "./no-close-button.tsx?raw";
import non_modalRaw from "./non-modal.tsx?raw";
import scroll_areaRaw from "./scroll-area.tsx?raw";

export const imports = `import { Dialog } from "@pisagor/react";`;

export const sources = {
  CloseBehavior: close_behaviorRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  InitialFocus: initial_focusRaw,
  Nested: nestedRaw,
  NoCloseButton: no_close_buttonRaw,
  NonModal: non_modalRaw,
  ScrollArea: scroll_areaRaw,
} as const;

export * from "./close-behavior";
export * from "./custom-spacing";
export * from "./default";
export * from "./initial-focus";
export * from "./nested";
export * from "./no-close-button";
export * from "./non-modal";
export * from "./scroll-area";
