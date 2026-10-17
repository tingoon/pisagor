import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { WithSidebarSource as WithSidebar } from "./with-sidebar";

export const imports = `import { Navbar } from "@pisagor/react";`;

export const sources = {
  CustomRecipe,
  Default,
  WithSidebar,
} as const;
