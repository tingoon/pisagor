import { CloseBehaviorSource as CloseBehavior } from "./close-behavior";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";
import { InsetSource as Inset } from "./inset";
import { NoCloseButtonSource as NoCloseButton } from "./no-close-button";
import { NonModalSource as NonModal } from "./non-modal";
import { ScrollAreaSource as ScrollArea } from "./scroll-area";
import { SidesSource as Sides } from "./sides";

export const imports = `import { Sheet } from "@pisagor/solid";`;

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
