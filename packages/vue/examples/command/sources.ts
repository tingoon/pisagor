import CustomRecipe from "./custom-recipe.ts?raw";
import Default from "./default.ts?raw";
import Groups from "./groups.ts?raw";
import Scrollable from "./scrollable.ts?raw";
import Shortcuts from "./shortcuts.ts?raw";
import Shorthand from "./shorthand.vue?raw";
import WithDialog from "./with-dialog.ts?raw";
import WithFooter from "./with-footer.ts?raw";

export const imports = `import { Command } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  Default,
  Groups,
  Scrollable,
  Shortcuts,
  Shorthand,
  WithDialog,
  WithFooter,
} as const;
