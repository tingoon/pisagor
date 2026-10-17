import CustomColor from "./custom-color.astro?raw";
import CustomRecipe from "./custom-recipe.astro?raw";
import CustomSize from "./custom-size.astro?raw";
import Sizes from "./sizes.astro?raw";
import Variants from "./variants.astro?raw";
import WithIcon from "./with-icon.astro?raw";

export const imports = `---
import { Status } from "@pisagor/astro";
---`;

export const sources = {
  CustomColor,
  CustomRecipe,
  CustomSize,
  Sizes,
  Variants,
  WithIcon,
} as const;
