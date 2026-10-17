import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Nested from "./nested.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import WithSeparator from "./with-separator.svelte?raw";

export const imports = `import { ButtonGroup } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  Default,
  Nested,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  WithSeparator,
} as const;
