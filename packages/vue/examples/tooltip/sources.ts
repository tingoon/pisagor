import Compound from "./compound.ts?raw";
import CustomRecipe from "./custom-recipe.ts?raw";
import Default from "./default.ts?raw";
import Disabled from "./disabled.ts?raw";
import Placements from "./placements.ts?raw";
import WithKeyboardShortcut from "./with-keyboard-shortcut.ts?raw";
import WithoutArrow from "./without-arrow.vue?raw";

export const imports = `import { Tooltip } from "@pisagor/vue";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  Disabled,
  Placements,
  WithKeyboardShortcut,
  WithoutArrow,
} as const;
