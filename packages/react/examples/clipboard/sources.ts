import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import custom_timeoutRaw from "./custom-timeout.tsx?raw";
import different_iconRaw from "./different-icon.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_labelRaw from "./with-label.tsx?raw";

export const imports = `import { Clipboard } from "@pisagor/react";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  CustomTimeout: custom_timeoutRaw,
  DifferentIcon: different_iconRaw,
  Variants: variantsRaw,
  WithLabel: with_labelRaw,
} as const;
