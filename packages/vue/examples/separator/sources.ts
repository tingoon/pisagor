import CustomRecipe from "./custom-recipe.vue?raw";
import Decorative from "./decorative.vue?raw";
import Default from "./default.vue?raw";
import InlineNavigation from "./inline-navigation.vue?raw";
import List from "./list.vue?raw";
import Vertical from "./vertical.vue?raw";

export const imports = `import { Separator } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Decorative,
  Default,
  InlineNavigation,
  List,
  Vertical,
} as const;
