import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import inline_navigationRaw from "./inline-navigation.vue?raw";
import listRaw from "./list.vue?raw";
import verticalRaw from "./vertical.vue?raw";

export const imports = `import { Separator } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  InlineNavigation: inline_navigationRaw,
  List: listRaw,
  Vertical: verticalRaw,
} as const;
