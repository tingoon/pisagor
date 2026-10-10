import close_behaviorRaw from "./close-behavior.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import custom_spacingRaw from "./custom-spacing.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import insetRaw from "./inset.tsx?raw";
import no_close_buttonRaw from "./no-close-button.tsx?raw";
import non_modalRaw from "./non-modal.tsx?raw";
import scroll_areaRaw from "./scroll-area.tsx?raw";
import sidesRaw from "./sides.tsx?raw";

export const imports = `import { Sheet } from "@pisagor/react";`;

export const sources = {
  CloseBehavior: close_behaviorRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  Inset: insetRaw,
  NoCloseButton: no_close_buttonRaw,
  NonModal: non_modalRaw,
  ScrollArea: scroll_areaRaw,
  Sides: sidesRaw,
} as const;
