import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import SeparatedPanels from "./separated-panels.vue?raw";
import Sizes from "./sizes.vue?raw";
import WithFormControls from "./with-form-controls.vue?raw";

export const imports = `import { Frame } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Default,
  SeparatedPanels,
  Sizes,
  WithFormControls,
} as const;
