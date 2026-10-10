import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import icon_onlyRaw from "./icon-only.vue?raw";
import with_linksRaw from "./with-links.vue?raw";

export const imports = `import { BottomNavigation } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  IconOnly: icon_onlyRaw,
  WithLinks: with_linksRaw,
} as const;
