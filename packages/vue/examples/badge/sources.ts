import CustomColor from "./custom-color.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Pill from "./pill.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithLink from "./with-link.vue?raw";
import WithSpinner from "./with-spinner.vue?raw";

export const imports = `import { Badge } from "@pisagor/vue";`;

export const sources = {
  CustomColor,
  CustomRecipe,
  Pill,
  Sizes,
  Variants,
  WithLink,
  WithSpinner,
} as const;
