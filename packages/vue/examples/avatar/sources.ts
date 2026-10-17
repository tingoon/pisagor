import Compound from "./compound.vue?raw";
import Count from "./count.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Fallbacks from "./fallbacks.vue?raw";
import Group from "./avatar-group.vue?raw";
import Initials from "./initials.vue?raw";
import Shapes from "./shapes.vue?raw";
import Sizes from "./sizes.vue?raw";

export const imports = `import { Avatar } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Count,
  CustomRecipe,
  Default,
  Fallbacks,
  Group,
  Initials,
  Shapes,
  Sizes,
} as const;
