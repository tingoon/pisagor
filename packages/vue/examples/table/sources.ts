import actionsRaw from "./actions.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import footerRaw from "./footer.vue?raw";
import not_hoverableRaw from "./not-hoverable.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { Table } from "@pisagor/vue";`;

export const sources = {
  Actions: actionsRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Footer: footerRaw,
  NotHoverable: not_hoverableRaw,
  Variants: variantsRaw,
} as const;
