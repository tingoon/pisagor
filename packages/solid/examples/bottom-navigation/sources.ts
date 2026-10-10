import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import icon_onlyRaw from "./icon-only.tsx?raw";
import with_linksRaw from "./with-links.tsx?raw";

export const imports = `import { BottomNavigation } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  IconOnly: icon_onlyRaw,
  WithLinks: with_linksRaw,
} as const;
