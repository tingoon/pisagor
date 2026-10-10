import custom_colorRaw from "./custom-color.astro?raw";
import custom_recipeRaw from "./custom-recipe.astro?raw";
import custom_sizeRaw from "./custom-size.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_iconRaw from "./with-icon.astro?raw";

export const imports = `---
import { Status } from "@pisagor/astro";
---`;

export const sources = {
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSize: custom_sizeRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;
