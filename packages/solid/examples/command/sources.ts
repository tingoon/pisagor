import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import groupsRaw from "./groups.tsx?raw";
import scrollableRaw from "./scrollable.tsx?raw";
import shortcutsRaw from "./shortcuts.tsx?raw";
import with_dialogRaw from "./with-dialog.tsx?raw";
import with_footerRaw from "./with-footer.tsx?raw";

export const imports = `import { Command } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Groups: groupsRaw,
  Scrollable: scrollableRaw,
  Shortcuts: shortcutsRaw,
  WithDialog: with_dialogRaw,
  WithFooter: with_footerRaw,
} as const;
