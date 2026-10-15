import compoundRaw from "./compound.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import placementsRaw from "./placements.svelte?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.svelte?raw";
import without_arrowRaw from "./without-arrow.svelte?raw";

export const imports = `import { Tooltip } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Placements: placementsRaw,
  WithKeyboardShortcut: with_keyboard_shortcutRaw,
  WithoutArrow: without_arrowRaw,
} as const;
