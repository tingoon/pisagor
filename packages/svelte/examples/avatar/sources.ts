import Compound from "./compound.svelte?raw";
import Count from "./count.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Fallbacks from "./fallbacks.svelte?raw";
import Group from "./avatar-group.svelte?raw";
import Initials from "./initials.svelte?raw";
import Shapes from "./shapes.svelte?raw";
import Sizes from "./sizes.svelte?raw";

export const imports = `import { Avatar } from "@pisagor/svelte";`;

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
