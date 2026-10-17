import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Indeterminate from "./indeterminate.vue?raw";
import OrientationHorizontal from "./orientation-horizontal.vue?raw";
import OrientationVertical from "./orientation-vertical.vue?raw";
import WithLabel from "./with-label.vue?raw";

export const imports = `import { Progress } from "@pisagor/vue";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Indeterminate,
  OrientationHorizontal,
  OrientationVertical,
  WithLabel,
} as const;
