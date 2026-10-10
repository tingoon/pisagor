import custom_recipeRaw from "./custom-recipe.ts?raw";
import defaultRaw from "./default.ts?raw";
import disabledRaw from "./disabled.ts?raw";
import placementsRaw from "./placements.ts?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.ts?raw";

export const imports = `import { Tooltip } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Placements: placementsRaw,
  WithKeyboardShortcut: with_keyboard_shortcutRaw,
} as const;
