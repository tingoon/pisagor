import CustomRecipe from "./custom-recipe.svelte?raw";
import Sizes from "./sizes.svelte?raw";

export const imports = `import { Spinner } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  Sizes,
} as const;
