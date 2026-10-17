import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";
import { IconSource as Icon } from "./icon";
import { ProductSource as Product } from "./product";
import { SizesSource as Sizes } from "./sizes";

export const imports = `import { Card } from "@pisagor/react";`;

export const sources = {
  CustomRecipe,
  CustomSpacing,
  Default,
  Icon,
  Product,
  Sizes,
} as const;
