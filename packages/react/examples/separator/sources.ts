import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DecorativeSource as Decorative } from "./decorative";
import { DefaultSource as Default } from "./default";
import { InlineNavigationSource as InlineNavigation } from "./inline-navigation";
import { ListSource as List } from "./list";
import { VerticalSource as Vertical } from "./vertical";

export const imports = `import { Separator } from "@pisagor/react";`;

export const sources = {
  CustomRecipe,
  Decorative,
  Default,
  InlineNavigation,
  List,
  Vertical,
} as const;
