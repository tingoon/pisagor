import Actions from "./actions.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Footer from "./footer.vue?raw";
import NotHoverable from "./not-hoverable.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";

export const imports = `import { Table } from "@pisagor/vue";`;

export const sources = {
  Actions,
  CustomRecipe,
  Default,
  Footer,
  NotHoverable,
  Sizes,
  Variants,
} as const;
