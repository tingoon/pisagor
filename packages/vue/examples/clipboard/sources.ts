import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import CustomTimeout from "./custom-timeout.vue?raw";
import DifferentIcon from "./different-icon.ts?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithLabel from "./with-label.vue?raw";

export const imports = `import { Clipboard } from "@pisagor/vue";`;

export const sources = {
  Controlled,
  CustomRecipe,
  CustomTimeout,
  DifferentIcon,
  Sizes,
  Variants,
  WithLabel,
} as const;
