import compoundRaw from "./compound.ts?raw";
import custom_recipeRaw from "./custom-recipe.ts?raw";
import defaultRaw from "./default.ts?raw";
import disabledRaw from "./disabled.ts?raw";
import placementsRaw from "./placements.ts?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.ts?raw";
import without_arrowRaw from "./without-arrow.vue?raw";

export const imports = `import { Tooltip } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Placements: placementsRaw,
  WithKeyboardShortcut: with_keyboard_shortcutRaw,
  WithoutArrow: without_arrowRaw,
} as const;
