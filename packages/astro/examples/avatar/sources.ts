import CustomRecipe from "./custom-recipe.astro?raw";
import Default from "./default.astro?raw";
import Fallbacks from "./fallbacks.astro?raw";
import Shapes from "./shapes.astro?raw";
import Sizes from "./sizes.astro?raw";

export const imports = `---
import { Avatar } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  Default,
  Fallbacks,
  Shapes,
  Sizes,
} as const;
