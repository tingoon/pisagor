import compoundRaw from "./compound.astro?raw";
import custom_colorRaw from "./custom-color.astro?raw";
import custom_recipeRaw from "./custom-recipe.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_actionRaw from "./with-action.astro?raw";
import with_iconRaw from "./with-icon.astro?raw";

export const imports = `---
import { Alert } from "@pisagor/astro";
---`;

export const sources = {
  Compound: compoundRaw,
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  Variants: variantsRaw,
  WithAction: with_actionRaw,
  WithIcon: with_iconRaw,
} as const;
