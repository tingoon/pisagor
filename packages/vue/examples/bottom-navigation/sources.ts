import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import IconOnly from "./icon-only.vue?raw";
import WithLinks from "./with-links.vue?raw";

export const imports = `import { BottomNavigation } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Default,
  IconOnly,
  WithLinks,
} as const;
