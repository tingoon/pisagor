import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import nestedRaw from "./nested.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import with_separatorRaw from "./with-separator.vue?raw";

export const imports = `import { ButtonGroup } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Nested: nestedRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  WithSeparator: with_separatorRaw,
} as const;
