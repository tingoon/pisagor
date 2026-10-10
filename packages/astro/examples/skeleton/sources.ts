import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";
import in_cardRaw from "./in-card.astro?raw";
import skeleton_textRaw from "./skeleton-text.astro?raw";

export const imports = `---
import { Skeleton } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  InCard: in_cardRaw,
  SkeletonText: skeleton_textRaw,
} as const;
