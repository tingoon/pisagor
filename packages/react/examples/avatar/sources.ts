import avatar_groupRaw from "./avatar-group.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import countRaw from "./count.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import fallbacksRaw from "./fallbacks.tsx?raw";
import shapesRaw from "./shapes.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { Avatar } from "@pisagor/react";`;

export const sources = {
  Compound: compoundRaw,
  Count: countRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Fallbacks: fallbacksRaw,
  Group: avatar_groupRaw,
  Shapes: shapesRaw,
  Sizes: sizesRaw,
} as const;
