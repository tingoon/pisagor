import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { SubmenuSource as Submenu } from "./submenu";
import { WrappingSource as Wrapping } from "./wrapping";

export const imports = `import { NavigationMenu } from "@pisagor/react";`;

export const sources = {
  CustomRecipe,
  Default,
  Submenu,
  Wrapping,
} as const;
