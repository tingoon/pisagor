import custom_colorRaw from "./custom-color.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import pillRaw from "./pill.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_linkRaw from "./with-link.svelte?raw";
import with_spinnerRaw from "./with-spinner.svelte?raw";

export const imports = `import { Badge } from "@pisagor/svelte";`;

export const sources = {
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithLink: with_linkRaw,
  WithSpinner: with_spinnerRaw,
} as const;
