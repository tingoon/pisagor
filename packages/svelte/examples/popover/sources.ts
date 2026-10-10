import anchorRaw from "./anchor.svelte?raw";
import close_behaviorRaw from "./close-behavior.svelte?raw";
import close_buttonRaw from "./close-button.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import modalRaw from "./modal.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import placementsRaw from "./placements.svelte?raw";
import scroll_areaRaw from "./scroll-area.svelte?raw";

export const imports = `import { Popover } from "@pisagor/svelte";`;

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
