import close_behaviorRaw from "./close-behavior.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import insetRaw from "./inset.svelte?raw";
import no_close_buttonRaw from "./no-close-button.svelte?raw";
import non_modalRaw from "./non-modal.svelte?raw";
import scroll_areaRaw from "./scroll-area.svelte?raw";
import sidesRaw from "./sides.svelte?raw";

export const imports = `import { Sheet } from "@pisagor/svelte";`;

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

export { default as CloseBehavior } from "./close-behavior.svelte";
export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
export { default as Inset } from "./inset.svelte";
export { default as NoCloseButton } from "./no-close-button.svelte";
export { default as NonModal } from "./non-modal.svelte";
export { default as ScrollArea } from "./scroll-area.svelte";
export { default as Sides } from "./sides.svelte";
