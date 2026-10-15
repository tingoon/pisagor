import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import in_cardRaw from "./in-card.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import skeleton_textRaw from "./skeleton-text.tsx?raw";

export const imports = `import { Skeleton } from "@pisagor/react";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  InCard: in_cardRaw,
  Sizes: sizesRaw,
  SkeletonText: skeleton_textRaw,
} as const;
