import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";
import nestedRaw from "./nested.astro?raw";
import orientation_horizontalRaw from "./orientation-horizontal.astro?raw";
import orientation_verticalRaw from "./orientation-vertical.astro?raw";
import with_separatorRaw from "./with-separator.astro?raw";

export const imports = `---
import { Button, ButtonGroup } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Nested: nestedRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  WithSeparator: with_separatorRaw,
} as const;
