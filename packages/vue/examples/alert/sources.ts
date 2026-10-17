import Compound from "./compound.ts?raw";
import CustomColor from "./custom-color.ts?raw";
import CustomRecipe from "./custom-recipe.ts?raw";
import Variants from "./variants.ts?raw";
import WithAction from "./with-action.ts?raw";
import WithIcon from "./with-icon.ts?raw";
import WithoutIcon from "./without-icon.vue?raw";

export const imports = `import { Alert } from "@pisagor/vue";`;

export const sources = {
  Compound,
  CustomColor,
  CustomRecipe,
  Variants,
  WithAction,
  WithIcon,
  WithoutIcon,
} as const;
