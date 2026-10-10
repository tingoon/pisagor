import close_triggerRaw from "./close-trigger.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";
import gutterRaw from "./gutter.vue?raw";
import placementsRaw from "./placements.vue?raw";
import with_dialogRaw from "./with-dialog.vue?raw";
import with_menuRaw from "./with-menu.vue?raw";

export const imports = `import { ActionBar } from "@pisagor/vue";`;

export const sources = {
  CloseTrigger: close_triggerRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Gutter: gutterRaw,
  Placements: placementsRaw,
  WithDialog: with_dialogRaw,
  WithMenu: with_menuRaw,
} as const;
