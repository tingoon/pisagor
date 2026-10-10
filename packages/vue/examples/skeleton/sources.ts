import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import in_cardRaw from "./in-card.vue?raw";
import skeleton_textRaw from "./skeleton-text.vue?raw";

export const imports = `import { Skeleton } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  InCard: in_cardRaw,
  SkeletonText: skeleton_textRaw,
} as const;
