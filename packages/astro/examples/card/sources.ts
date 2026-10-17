import CustomRecipe from "./custom-recipe.astro?raw";
import CustomSpacing from "./custom-spacing.astro?raw";
import Default from "./default.astro?raw";
import Icon from "./icon.astro?raw";
import Product from "./product.astro?raw";
import Sizes from "./sizes.astro?raw";

export const imports = `---
import { Card } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  CustomSpacing,
  Default,
  Icon,
  Product,
  Sizes,
} as const;
