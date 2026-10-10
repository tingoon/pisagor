import custom_colorRaw from "./custom-color.astro?raw";
import custom_recipeRaw from "./custom-recipe.astro?raw";
import pillRaw from "./pill.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_linkRaw from "./with-link.astro?raw";
import with_spinnerRaw from "./with-spinner.astro?raw";

export const imports = `---
import { Badge } from "@pisagor/astro";
---`;

export const sources = {
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithLink: with_linkRaw,
  WithSpinner: with_spinnerRaw,
} as const;
