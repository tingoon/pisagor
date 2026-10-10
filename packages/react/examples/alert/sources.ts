import compoundRaw from "./compound.tsx?raw";
import custom_colorRaw from "./custom-color.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_actionRaw from "./with-action.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";

export const imports = `import { Alert } from "@pisagor/react";`;

export const sources = {
  Compound: compoundRaw,
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  Variants: variantsRaw,
  WithAction: with_actionRaw,
  WithIcon: with_iconRaw,
} as const;
