import CloseBehavior from "./close-behavior.ts?raw";
import Compound from "./compound.vue?raw";
import CustomRecipe from "./custom-recipe.ts?raw";
import CustomSpacing from "./custom-spacing.ts?raw";
import Default from "./default.ts?raw";
import InitialFocus from "./initial-focus.ts?raw";
import Nested from "./nested.ts?raw";
import NoCloseButton from "./no-close-button.ts?raw";
import NonModal from "./non-modal.ts?raw";
import ScrollArea from "./scroll-area.ts?raw";

export const imports = `import { Dialog } from "@pisagor/vue";`;

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
