import close_behaviorRaw from "./close-behavior.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_spacingRaw from "./custom-spacing.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import initial_focusRaw from "./initial-focus.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import no_close_buttonRaw from "./no-close-button.svelte?raw";
import non_modalRaw from "./non-modal.svelte?raw";
import scroll_areaRaw from "./scroll-area.svelte?raw";

export const imports = `import { Dialog } from "@pisagor/svelte";`;

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
