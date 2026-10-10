import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import with_sidebarRaw from "./with-sidebar.ts?raw";

export const imports = `import { Navbar } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WithSidebar: with_sidebarRaw,
} as const;
