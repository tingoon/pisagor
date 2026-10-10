import close_triggerRaw from "./close-trigger.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import gutterRaw from "./gutter.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import with_dialogRaw from "./with-dialog.tsx?raw";
import with_menuRaw from "./with-menu.tsx?raw";

export const imports = `import { ActionBar } from "@pisagor/react";`;

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
