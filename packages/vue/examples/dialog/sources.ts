import close_behaviorRaw from "./close-behavior.ts?raw";
import compoundRaw from "./compound.vue?raw";
import custom_recipeRaw from "./custom-recipe.ts?raw";
import custom_spacingRaw from "./custom-spacing.ts?raw";
import defaultRaw from "./default.ts?raw";
import initial_focusRaw from "./initial-focus.ts?raw";
import nestedRaw from "./nested.ts?raw";
import no_close_buttonRaw from "./no-close-button.ts?raw";
import non_modalRaw from "./non-modal.ts?raw";
import scroll_areaRaw from "./scroll-area.ts?raw";

export const imports = `import { Dialog } from "@pisagor/vue";`;

export const sources = {
  CloseBehavior: close_behaviorRaw,
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
  InitialFocus: initial_focusRaw,
  Nested: nestedRaw,
  NoCloseButton: no_close_buttonRaw,
  NonModal: non_modalRaw,
  ScrollArea: scroll_areaRaw,
} as const;
