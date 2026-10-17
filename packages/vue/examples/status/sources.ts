import CustomColor from "./custom-color.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSize from "./custom-size.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithIcon from "./with-icon.vue?raw";

export const imports = `import { Status } from "@pisagor/vue";`;

export const sources = {
  CustomColor,
  CustomRecipe,
  CustomSize,
  Sizes,
  Variants,
  WithIcon,
} as const;
