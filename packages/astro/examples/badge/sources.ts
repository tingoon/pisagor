import CustomColor from "./custom-color.astro?raw";
import CustomRecipe from "./custom-recipe.astro?raw";
import Pill from "./pill.astro?raw";
import Sizes from "./sizes.astro?raw";
import Variants from "./variants.astro?raw";
import WithLink from "./with-link.astro?raw";
import WithSpinner from "./with-spinner.astro?raw";

export const imports = `---
import { Badge } from "@pisagor/astro";
---`;

export const sources = {
  CustomColor,
  CustomRecipe,
  Pill,
  Sizes,
  Variants,
  WithLink,
  WithSpinner,
} as const;
