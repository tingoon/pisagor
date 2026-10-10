import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import groupsRaw from "./groups.svelte?raw";
import scrollableRaw from "./scrollable.svelte?raw";
import shortcutsRaw from "./shortcuts.svelte?raw";
import with_dialogRaw from "./with-dialog.svelte?raw";
import with_footerRaw from "./with-footer.svelte?raw";

export const imports = `import { Command } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Groups: groupsRaw,
  Scrollable: scrollableRaw,
  Shortcuts: shortcutsRaw,
  WithDialog: with_dialogRaw,
  WithFooter: with_footerRaw,
} as const;
