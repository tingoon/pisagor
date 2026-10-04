import close_triggerRaw from "./close-trigger.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import gutterRaw from "./gutter.svelte?raw";
import placementsRaw from "./placements.svelte?raw";
import with_dialogRaw from "./with-dialog.svelte?raw";
import with_menuRaw from "./with-menu.svelte?raw";

export const imports = `import { ActionBar } from "@pisagor/svelte";`;

export const sources = {
  CloseTrigger: close_triggerRaw,
  Controlled: controlledRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Gutter: gutterRaw,
  Placements: placementsRaw,
  WithDialog: with_dialogRaw,
  WithMenu: with_menuRaw,
} as const;

export { default as CloseTrigger } from "./close-trigger.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as CustomSpacing } from "./custom-spacing.svelte";
export { default as Default } from "./default.svelte";
export { default as Gutter } from "./gutter.svelte";
export { default as Placements } from "./placements.svelte";
export { default as WithDialog } from "./with-dialog.svelte";
export { default as WithMenu } from "./with-menu.svelte";
