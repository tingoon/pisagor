import Compact from "./compact.svelte?raw";
import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Sizes from "./sizes.svelte?raw";

export const imports = `import { EmptyState } from "@pisagor/svelte";`;

export const sources = {
  Compact,
  Compound,
  CustomRecipe,
  Default,
  Sizes,
} as const;
