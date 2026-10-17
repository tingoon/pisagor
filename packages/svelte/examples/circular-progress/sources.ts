import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Indeterminate from "./indeterminate.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Thickness from "./thickness.svelte?raw";
import WithValue from "./with-value.svelte?raw";

export const imports = `import { CircularProgress } from "@pisagor/svelte";`;

export const sources = {
  Controlled,
  CustomRecipe,
  Default,
  Indeterminate,
  Sizes,
  Thickness,
  WithValue,
} as const;
