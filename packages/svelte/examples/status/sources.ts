import custom_colorRaw from "./custom-color.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_sizeRaw from "./custom-size.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_iconRaw from "./with-icon.svelte?raw";

export const imports = `import { Status } from "@pisagor/svelte";`;

export const sources = {
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSize: custom_sizeRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;
