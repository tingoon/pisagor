import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import inline_navigationRaw from "./inline-navigation.tsx?raw";
import listRaw from "./list.tsx?raw";
import verticalRaw from "./vertical.tsx?raw";

export const imports = `import { Separator } from "@pisagor/react";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  InlineNavigation: inline_navigationRaw,
  List: listRaw,
  Vertical: verticalRaw,
} as const;
