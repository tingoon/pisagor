import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Indeterminate from "./indeterminate.vue?raw";
import Sizes from "./sizes.vue?raw";
import Thickness from "./thickness.vue?raw";
import WithValue from "./with-value.vue?raw";

export const imports = `import { CircularProgress } from "@pisagor/vue";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Indeterminate,
  Sizes,
  Thickness,
  WithValue,
} as const;
