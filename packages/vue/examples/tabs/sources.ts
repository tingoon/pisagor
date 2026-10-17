import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import OrientationHorizontal from "./orientation-horizontal.vue?raw";
import OrientationVertical from "./orientation-vertical.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithIcons from "./with-icons.vue?raw";
import WithoutIndicator from "./without-indicator.vue?raw";

export const imports = `import { Tabs } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  Variants,
  WithIcons,
  WithoutIndicator,
} as const;
