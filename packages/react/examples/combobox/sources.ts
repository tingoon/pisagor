import autohighlightRaw from "./autohighlight.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import groupRaw from "./group.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import multipleRaw from "./multiple.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_clear_buttonRaw from "./with-clear-button.tsx?raw";
import with_scrollRaw from "./with-scroll.tsx?raw";
import with_start_iconRaw from "./with-start-icon.tsx?raw";

export const imports = `import { Combobox } from "@pisagor/react";`;

export const sources = {
  Autohighlight: autohighlightRaw,
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Group: groupRaw,
  Invalid: invalidRaw,
  Multiple: multipleRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithClearButton: with_clear_buttonRaw,
  WithScroll: with_scrollRaw,
  WithStartIcon: with_start_iconRaw,
} as const;
