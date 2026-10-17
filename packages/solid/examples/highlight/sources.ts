import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomStyleSource as CustomStyle } from "./custom-style";
import { DefaultSource as Default } from "./default";
import { MultipleSource as Multiple } from "./multiple";
import { SearchQuerySource as SearchQuery } from "./search-query";
import { SquiggleSource as Squiggle } from "./squiggle";

export const imports = `import { Highlight } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe,
  CustomStyle,
  Default,
  Multiple,
  SearchQuery,
  Squiggle,
} as const;
