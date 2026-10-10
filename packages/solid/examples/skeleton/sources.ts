import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import in_cardRaw from "./in-card.tsx?raw";
import skeleton_textRaw from "./skeleton-text.tsx?raw";

export const imports = `import { Skeleton } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  InCard: in_cardRaw,
  SkeletonText: skeleton_textRaw,
} as const;
