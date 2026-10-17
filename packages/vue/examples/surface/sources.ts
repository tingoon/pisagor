import CustomRecipe from "./custom-recipe.vue?raw";
import Nested from "./nested.vue?raw";
import Padding from "./padding.vue?raw";
import Variants from "./variants.vue?raw";
import WithFormControls from "./with-form-controls.vue?raw";

export const imports = `import { Surface } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Nested,
  Padding,
  Variants,
  WithFormControls,
} as const;
