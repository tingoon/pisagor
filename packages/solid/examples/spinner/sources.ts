import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { SizesSource as Sizes } from "./sizes";

export const imports = `import { Spinner } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe,
  Sizes,
} as const;
