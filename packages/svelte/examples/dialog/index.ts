import { stripSvelteExample } from "@pisagor/utils";
import close_behaviorRaw from "./close-behavior.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import initial_focusRaw from "./initial-focus.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import no_close_buttonRaw from "./no-close-button.svelte?raw";
import non_modalRaw from "./non-modal.svelte?raw";
import scroll_areaRaw from "./scroll-area.svelte?raw";

export const imports = `import { Dialog } from "@pisagor/svelte/dialog";`;

export const sources = {
  CloseBehavior: stripSvelteExample(close_behaviorRaw),
  CustomSpacing: stripSvelteExample(custom_spacingRaw),
  Default: stripSvelteExample(defaultRaw),
  InitialFocus: stripSvelteExample(initial_focusRaw),
  Nested: stripSvelteExample(nestedRaw),
  NoCloseButton: stripSvelteExample(no_close_buttonRaw),
  NonModal: stripSvelteExample(non_modalRaw),
  ScrollArea: stripSvelteExample(scroll_areaRaw),
} as const;

export { default as CloseBehavior } from "./close-behavior.svelte";
export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
export { default as InitialFocus } from "./initial-focus.svelte";
export { default as Nested } from "./nested.svelte";
export { default as NoCloseButton } from "./no-close-button.svelte";
export { default as NonModal } from "./non-modal.svelte";
export { default as ScrollArea } from "./scroll-area.svelte";
