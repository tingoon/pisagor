import Compact from "./compact.astro?raw";
import Compound from "./compound.astro?raw";
import CustomRecipe from "./custom-recipe.astro?raw";
import Default from "./default.astro?raw";
import Sizes from "./sizes.astro?raw";

export const imports = `---
import { Button, EmptyState } from "@pisagor/astro";
---`;

export const sources = {
  Compact,
  Compound,
  CustomRecipe,
  Default,
  Sizes,
} as const;
