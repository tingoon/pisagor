import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { InCardSource as InCard } from "./in-card";
import { SizesSource as Sizes } from "./sizes";
import { SkeletonTextSource as SkeletonText } from "./skeleton-text";

export const imports = `import { Skeleton } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe,
  Default,
  InCard,
  Sizes,
  SkeletonText,
} as const;
