import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Disabled from "./disabled.vue?raw";
import IconGroup from "./icon-group.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithIcon from "./with-icon.vue?raw";

export const imports = `import { Toggle } from "@pisagor/vue";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Disabled,
  IconGroup,
  Sizes,
  Variants,
  WithIcon,
} as const;
