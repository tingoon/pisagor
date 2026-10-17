import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import WithSidebar from "./with-sidebar.ts?raw";

export const imports = `import { Navbar } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Default,
  WithSidebar,
} as const;
