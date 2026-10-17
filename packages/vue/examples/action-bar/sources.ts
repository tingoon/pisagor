import CloseTrigger from "./close-trigger.vue?raw";
import Controlled from "./controlled.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSpacing from "./custom-spacing.vue?raw";
import Default from "./default.vue?raw";
import Gutter from "./gutter.vue?raw";
import Placements from "./placements.vue?raw";
import WithDialog from "./with-dialog.vue?raw";
import WithMenu from "./with-menu.vue?raw";

export const imports = `import { ActionBar } from "@pisagor/vue";`;

export const sources = {
  CloseTrigger,
  Controlled,
  CustomRecipe,
  CustomSpacing,
  Default,
  Gutter,
  Placements,
  WithDialog,
  WithMenu,
} as const;
