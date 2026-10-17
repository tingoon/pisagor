import CloseBehavior from "./close-behavior.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";
import Inset from "./inset.svelte?raw";
import NoCloseButton from "./no-close-button.svelte?raw";
import NonModal from "./non-modal.svelte?raw";
import ScrollArea from "./scroll-area.svelte?raw";
import Sides from "./sides.svelte?raw";

export const imports = `import { Sheet } from "@pisagor/svelte";`;

export const sources = {
  CloseBehavior,
  CustomRecipe,
  CustomSpacing,
  Default,
  Inset,
  NoCloseButton,
  NonModal,
  ScrollArea,
  Sides,
} as const;
