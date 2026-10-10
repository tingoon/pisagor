import actionsRaw from "./actions.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import footerRaw from "./footer.svelte?raw";
import not_hoverableRaw from "./not-hoverable.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { Table } from "@pisagor/svelte";`;

export const sources = {
  Actions: actionsRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Footer: footerRaw,
  NotHoverable: not_hoverableRaw,
  Variants: variantsRaw,
} as const;
