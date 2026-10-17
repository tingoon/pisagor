import CustomRecipe from "./custom-recipe.astro?raw";
import Default from "./default.astro?raw";
import Indeterminate from "./indeterminate.astro?raw";
import Sizes from "./sizes.astro?raw";
import Thickness from "./thickness.astro?raw";
import WithValue from "./with-value.astro?raw";

export const imports = `---
import { CircularProgress } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  Default,
  Indeterminate,
  Sizes,
  Thickness,
  WithValue,
} as const;
