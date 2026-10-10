import compoundRaw from "./compound.ts?raw";
import custom_colorRaw from "./custom-color.ts?raw";
import custom_recipeRaw from "./custom-recipe.ts?raw";
import variantsRaw from "./variants.ts?raw";
import with_actionRaw from "./with-action.ts?raw";
import with_iconRaw from "./with-icon.ts?raw";

export const imports = `import { Alert } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  Variants: variantsRaw,
  WithAction: with_actionRaw,
  WithIcon: with_iconRaw,
} as const;
