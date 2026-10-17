import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Placements from "./placements.svelte?raw";
import WithKeyboardShortcut from "./with-keyboard-shortcut.svelte?raw";
import WithoutArrow from "./without-arrow.svelte?raw";

export const imports = `import { Tooltip } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  Disabled,
  Placements,
  WithKeyboardShortcut,
  WithoutArrow,
} as const;
