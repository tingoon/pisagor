import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import InCard from "./in-card.vue?raw";
import Sizes from "./sizes.vue?raw";
import SkeletonText from "./skeleton-text.vue?raw";

export const imports = `import { Skeleton } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Default,
  InCard,
  Sizes,
  SkeletonText,
} as const;
