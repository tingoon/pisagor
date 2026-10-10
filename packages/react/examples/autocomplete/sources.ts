import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import groupRaw from "./group.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_clear_buttonRaw from "./with-clear-button.tsx?raw";
import with_start_iconRaw from "./with-start-icon.tsx?raw";
import with_triggerRaw from "./with-trigger.tsx?raw";

export const imports = `import { Autocomplete } from "@pisagor/react";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Group: groupRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithClearButton: with_clear_buttonRaw,
  WithStartIcon: with_start_iconRaw,
  WithTrigger: with_triggerRaw,
} as const;
