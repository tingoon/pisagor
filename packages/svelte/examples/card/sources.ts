import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";
import Icon from "./icon.svelte?raw";
import Product from "./product.svelte?raw";
import Sizes from "./sizes.svelte?raw";

export const imports = `import { Card } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  CustomSpacing,
  Default,
  Icon,
  Product,
  Sizes,
} as const;
