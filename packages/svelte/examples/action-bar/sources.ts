import CloseTrigger from "./close-trigger.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";
import Gutter from "./gutter.svelte?raw";
import Placements from "./placements.svelte?raw";
import WithDialog from "./with-dialog.svelte?raw";
import WithMenu from "./with-menu.svelte?raw";

export const imports = `import { ActionBar } from "@pisagor/svelte";`;

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
