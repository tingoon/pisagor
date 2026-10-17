import Actions from "./actions.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Footer from "./footer.svelte?raw";
import NotHoverable from "./not-hoverable.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";

export const imports = `import { Table } from "@pisagor/svelte";`;

export const sources = {
  Actions,
  CustomRecipe,
  Default,
  Footer,
  NotHoverable,
  Sizes,
  Variants,
} as const;
