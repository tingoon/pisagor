import CustomRecipe from "./custom-recipe.vue?raw";
import KbdGroup from "./kbd-group.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithButton from "./with-button.vue?raw";
import WithTooltip from "./with-tooltip.ts?raw";

export const imports = `import { Kbd } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  KbdGroup,
  Sizes,
  Variants,
  WithButton,
  WithTooltip,
} as const;
