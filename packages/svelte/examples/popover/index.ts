import { stripSvelteExample } from "@pisagor/utils";
import anchorRaw from "./anchor.svelte?raw";
import close_behaviorRaw from "./close-behavior.svelte?raw";
import close_buttonRaw from "./close-button.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import modalRaw from "./modal.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import placementsRaw from "./placements.svelte?raw";
import scroll_areaRaw from "./scroll-area.svelte?raw";

export const imports = `import { Popover } from "@pisagor/svelte/popover";`;

export const sources = {
  Anchor: stripSvelteExample(anchorRaw),
  CloseBehavior: stripSvelteExample(close_behaviorRaw),
  CloseButton: stripSvelteExample(close_buttonRaw),
  CustomSpacing: stripSvelteExample(custom_spacingRaw),
  Default: stripSvelteExample(defaultRaw),
  Modal: stripSvelteExample(modalRaw),
  Nested: stripSvelteExample(nestedRaw),
  Placements: stripSvelteExample(placementsRaw),
  ScrollArea: stripSvelteExample(scroll_areaRaw),
} as const;

export { default as Anchor } from "./anchor.svelte";
export { default as CloseBehavior } from "./close-behavior.svelte";
export { default as CloseButton } from "./close-button.svelte";
export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
export { default as Modal } from "./modal.svelte";
export { default as Nested } from "./nested.svelte";
export { default as Placements } from "./placements.svelte";
export { default as ScrollArea } from "./scroll-area.svelte";
