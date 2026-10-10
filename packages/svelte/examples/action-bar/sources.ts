import close_triggerRaw from "./close-trigger.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
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
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Gutter: gutterRaw,
  Placements: placementsRaw,
  WithDialog: with_dialogRaw,
  WithMenu: with_menuRaw,
} as const;
