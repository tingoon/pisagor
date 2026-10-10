import custom_colorRaw from "./custom-color.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_sizeRaw from "./custom-size.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_iconRaw from "./with-icon.vue?raw";

export const imports = `import { Status } from "@pisagor/vue";`;

export const sources = {
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSize: custom_sizeRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;
