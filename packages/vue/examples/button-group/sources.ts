import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Nested from "./nested.vue?raw";
import OrientationHorizontal from "./orientation-horizontal.vue?raw";
import OrientationVertical from "./orientation-vertical.vue?raw";
import Sizes from "./sizes.vue?raw";
import WithSeparator from "./with-separator.vue?raw";

export const imports = `import { ButtonGroup } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Default,
  Nested,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  WithSeparator,
} as const;
