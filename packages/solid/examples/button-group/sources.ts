import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { NestedSource as Nested } from "./nested";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";
import { SizesSource as Sizes } from "./sizes";
import { WithSeparatorSource as WithSeparator } from "./with-separator";

export const imports = `import { ButtonGroup } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe,
  Default,
  Nested,
  OrientationHorizontal,
  OrientationVertical,
  Sizes,
  WithSeparator,
} as const;
