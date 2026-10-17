import CloseBehavior from "./close-behavior.svelte?raw";
import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";
import InitialFocus from "./initial-focus.svelte?raw";
import Nested from "./nested.svelte?raw";
import NoCloseButton from "./no-close-button.svelte?raw";
import NonModal from "./non-modal.svelte?raw";
import ScrollArea from "./scroll-area.svelte?raw";

export const imports = `import { Dialog } from "@pisagor/svelte";`;

export const sources = {
  CloseBehavior,
  Compound,
  CustomRecipe,
  CustomSpacing,
  Default,
  InitialFocus,
  Nested,
  NoCloseButton,
  NonModal,
  ScrollArea,
} as const;
