import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import WithActions from "./with-actions.svelte?raw";

export const imports = `import { File } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  WithActions,
} as const;
