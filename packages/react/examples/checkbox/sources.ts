import checkbox_groupRaw from "./checkbox-group.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import indeterminateRaw from "./indeterminate.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Checkbox } from "@pisagor/react";`;

export const sources = {
  CheckboxGroup: checkbox_groupRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Indeterminate: indeterminateRaw,
  Invalid: invalidRaw,
  Variants: variantsRaw,
} as const;
