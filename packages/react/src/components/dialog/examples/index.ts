import { stripTsxExample } from "@pisagor/utils";
import close_behaviorRaw from "./close-behavior.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import initial_focusRaw from "./initial-focus.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import no_close_buttonRaw from "./no-close-button.tsx?raw";
import non_modalRaw from "./non-modal.tsx?raw";
import scroll_areaRaw from "./scroll-area.tsx?raw";

export const imports = `import { Dialog } from "@pisagor/react/dialog";`;

export const sources = {
  CloseBehavior: stripTsxExample(close_behaviorRaw),
  CustomSpacing: stripTsxExample(custom_spacingRaw),
  Default: stripTsxExample(defaultRaw),
  InitialFocus: stripTsxExample(initial_focusRaw),
  Nested: stripTsxExample(nestedRaw),
  NoCloseButton: stripTsxExample(no_close_buttonRaw),
  NonModal: stripTsxExample(non_modalRaw),
  ScrollArea: stripTsxExample(scroll_areaRaw),
} as const;

export { CloseBehavior } from "./close-behavior";
export { CustomSpacing } from "./custom-spacing";
export { Default } from "./default";
export { InitialFocus } from "./initial-focus";
export { Nested } from "./nested";
export { NoCloseButton } from "./no-close-button";
export { NonModal } from "./non-modal";
export { ScrollArea } from "./scroll-area";
