import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import in_cardRaw from "./in-card.svelte?raw";
import skeleton_textRaw from "./skeleton-text.svelte?raw";

export const imports = `import { Skeleton } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  InCard: in_cardRaw,
  SkeletonText: skeleton_textRaw,
} as const;
