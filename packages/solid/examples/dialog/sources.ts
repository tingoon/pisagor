import { CloseBehaviorSource as CloseBehavior } from "./close-behavior";
import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";
import { InitialFocusSource as InitialFocus } from "./initial-focus";
import { NestedSource as Nested } from "./nested";
import { NoCloseButtonSource as NoCloseButton } from "./no-close-button";
import { NonModalSource as NonModal } from "./non-modal";
import { ScrollAreaSource as ScrollArea } from "./scroll-area";

export const imports = `import { Dialog } from "@pisagor/solid";`;

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
