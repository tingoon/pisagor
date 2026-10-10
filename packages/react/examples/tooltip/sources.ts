import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.tsx?raw";

export const imports = `import { Tooltip } from "@pisagor/react";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Placements: placementsRaw,
  WithKeyboardShortcut: with_keyboard_shortcutRaw,
} as const;
