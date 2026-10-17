import CustomRecipe from "./custom-recipe.astro?raw";
import Default from "./default.astro?raw";
import Nested from "./nested.astro?raw";
import OrientationHorizontal from "./orientation-horizontal.astro?raw";
import OrientationVertical from "./orientation-vertical.astro?raw";
import Sizes from "./sizes.astro?raw";
import WithSeparator from "./with-separator.astro?raw";

export const imports = `---
import { Button, ButtonGroup } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  Default,
  Nested,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  WithSeparator,
} as const;
