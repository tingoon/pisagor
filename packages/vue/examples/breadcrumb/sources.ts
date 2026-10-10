import collapsedRaw from "./collapsed.vue?raw";
import compoundRaw from "./compound.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_separatorRaw from "./custom-separator.vue?raw";
import defaultRaw from "./default.vue?raw";
import with_linkRaw from "./with-link.vue?raw";
import with_menuRaw from "./with-menu.vue?raw";

export const imports = `import { Breadcrumb } from "@pisagor/vue";`;

export const sources = {
  Collapsed: collapsedRaw,
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSeparator: custom_separatorRaw,
  Default: defaultRaw,
  WithLink: with_linkRaw,
  WithMenu: with_menuRaw,
} as const;
