import avatar_groupRaw from "./avatar-group.vue?raw";
import compoundRaw from "./compound.vue?raw";
import countRaw from "./count.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import fallbacksRaw from "./fallbacks.vue?raw";
import shapesRaw from "./shapes.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { Avatar } from "@pisagor/vue";`;

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
