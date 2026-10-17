import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import InCard from "./in-card.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import SkeletonText from "./skeleton-text.svelte?raw";

export const imports = `import { Skeleton } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  Default,
  InCard,
  Sizes,
  SkeletonText,
} as const;
