import CloseBehavior from "./close-behavior.ts?raw";
import CustomRecipe from "./custom-recipe.ts?raw";
import CustomSpacing from "./custom-spacing.ts?raw";
import Default from "./default.ts?raw";
import Inset from "./inset.ts?raw";
import NoCloseButton from "./no-close-button.ts?raw";
import NonModal from "./non-modal.ts?raw";
import ScrollArea from "./scroll-area.ts?raw";
import Sides from "./sides.ts?raw";

export const imports = `import { Sheet } from "@pisagor/vue";`;

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
