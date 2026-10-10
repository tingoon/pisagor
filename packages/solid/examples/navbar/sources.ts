import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import with_sidebarRaw from "./with-sidebar.tsx?raw";

export const imports = `import { Navbar } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WithSidebar: with_sidebarRaw,
} as const;
