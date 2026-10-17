import CustomRecipe from "./custom-recipe.astro?raw";
import Default from "./default.astro?raw";
import InCard from "./in-card.astro?raw";
import Sizes from "./sizes.astro?raw";
import SkeletonText from "./skeleton-text.astro?raw";

export const imports = `---
import { Skeleton } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  Default,
  InCard,
  Sizes,
  SkeletonText,
} as const;
