import CustomColor from "./custom-color.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Pill from "./pill.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithLink from "./with-link.svelte?raw";
import WithSpinner from "./with-spinner.svelte?raw";

export const imports = `import { Badge } from "@pisagor/svelte";`;

export const sources = {
  CustomColor,
  CustomRecipe,
  Pill,
  Sizes,
  Variants,
  WithLink,
  WithSpinner,
} as const;
