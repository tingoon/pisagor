import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { SizesSource as Sizes } from "./sizes";

export const imports = `import { Spinner } from "@pisagor/react";`;

export const sources = {
  CustomRecipe,
  Default,
  Sizes,
} as const;
