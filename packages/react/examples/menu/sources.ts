import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import with_groupsRaw from "./with-groups.tsx?raw";

export const imports = `import { Menu } from "@pisagor/react";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WithGroups: with_groupsRaw,
} as const;
