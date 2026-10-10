import avatar_groupRaw from "./avatar-group.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import countRaw from "./count.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import fallbacksRaw from "./fallbacks.svelte?raw";
import shapesRaw from "./shapes.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";

export const imports = `import { Avatar } from "@pisagor/svelte";`;

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
