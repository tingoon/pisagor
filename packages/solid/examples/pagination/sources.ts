import { ControlledSource as Controlled } from "./controlled";
import { CustomCompositionSource as CustomComposition } from "./custom-composition";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { LinksSource as Links } from "./links";
import { LinkUrlsSource as LinkUrls } from "./link-urls";
import { PageRangeSource as PageRange } from "./page-range";

export const imports = `import { Pagination } from "@pisagor/solid";`;

export const sources = {
  Controlled,
  CustomComposition,
  CustomRecipe,
  Default,
  Links,
  LinkUrls,
  PageRange,
} as const;
