import Collapsed from "./collapsed.vue?raw";
import Compound from "./compound.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSeparator from "./custom-separator.vue?raw";
import Default from "./default.vue?raw";
import WithLink from "./with-link.vue?raw";
import WithMenu from "./with-menu.vue?raw";

export const imports = `import { Breadcrumb } from "@pisagor/vue";`;

export const sources = {
  Collapsed,
  Compound,
  CustomRecipe,
  CustomSeparator,
  Default,
  WithLink,
  WithMenu,
} as const;
