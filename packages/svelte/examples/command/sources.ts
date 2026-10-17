import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Groups from "./groups.svelte?raw";
import Scrollable from "./scrollable.svelte?raw";
import Shortcuts from "./shortcuts.svelte?raw";
import Shorthand from "./shorthand.svelte?raw";
import WithDialog from "./with-dialog.svelte?raw";
import WithFooter from "./with-footer.svelte?raw";

export const imports = `import { Command } from "@pisagor/svelte";`;

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
