import ControlledPosition from "./controlled-position.vue?raw";
import ControlledSize from "./controlled-size.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSpacing from "./custom-spacing.vue?raw";
import Default from "./default.vue?raw";

export const imports = `import { FloatingPanel } from "@pisagor/vue";`;

export const sources = {
  ControlledPosition,
  ControlledSize,
  CustomRecipe,
  CustomSpacing,
  Default,
} as const;
