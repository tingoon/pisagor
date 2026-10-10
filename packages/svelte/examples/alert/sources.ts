import compoundRaw from "./compound.svelte?raw";
import custom_colorRaw from "./custom-color.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_actionRaw from "./with-action.svelte?raw";
import with_iconRaw from "./with-icon.svelte?raw";

export const imports = `import { Alert } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  Variants: variantsRaw,
  WithAction: with_actionRaw,
  WithIcon: with_iconRaw,
} as const;
