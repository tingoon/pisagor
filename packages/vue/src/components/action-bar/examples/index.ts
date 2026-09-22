import { stripVueExample } from "@pisagor/utils";
import close_triggerRaw from "./close-trigger.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";
import gutterRaw from "./gutter.vue?raw";
import placementsRaw from "./placements.vue?raw";
import with_dialogRaw from "./with-dialog.vue?raw";
import with_menuRaw from "./with-menu.vue?raw";

export const imports = `import { ActionBar } from "@pisagor/vue/action-bar";`;

export const sources = {
  CloseTrigger: stripVueExample(close_triggerRaw),
  Controlled: stripVueExample(controlledRaw),
  CustomSpacing: stripVueExample(custom_spacingRaw),
  Default: stripVueExample(defaultRaw),
  Gutter: stripVueExample(gutterRaw),
  Placements: stripVueExample(placementsRaw),
  WithDialog: stripVueExample(with_dialogRaw),
  WithMenu: stripVueExample(with_menuRaw),
} as const;

export { default as CloseTrigger } from "./close-trigger.vue";
export { default as Controlled } from "./controlled.vue";
export { default as CustomSpacing } from "./custom-spacing.vue";
export { default as Default } from "./default.vue";
export { default as Gutter } from "./gutter.vue";
export { default as Placements } from "./placements.vue";
export { default as WithDialog } from "./with-dialog.vue";
export { default as WithMenu } from "./with-menu.vue";
