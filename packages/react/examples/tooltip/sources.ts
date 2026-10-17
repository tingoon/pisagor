import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { PlacementsSource as Placements } from "./placements";
import { WithKeyboardShortcutSource as WithKeyboardShortcut } from "./with-keyboard-shortcut";
import { WithoutArrowSource as WithoutArrow } from "./without-arrow";

export const imports = `import { Tooltip } from "@pisagor/react";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  Disabled,
  Placements,
  WithKeyboardShortcut,
  WithoutArrow,
} as const;
