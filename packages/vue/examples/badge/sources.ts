import custom_colorRaw from "./custom-color.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import pillRaw from "./pill.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_linkRaw from "./with-link.vue?raw";
import with_spinnerRaw from "./with-spinner.vue?raw";

export const imports = `import { Badge } from "@pisagor/vue";`;

export const sources = {
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithLink: with_linkRaw,
  WithSpinner: with_spinnerRaw,
} as const;
