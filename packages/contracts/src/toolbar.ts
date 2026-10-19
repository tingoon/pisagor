import type { ToolbarRecipeFn, ToolbarRecipeSlot } from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Toolbar root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface ToolbarRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue toolbarRecipe
   */
  recipe?: ToolbarRecipeFn;
}

/**
 * Toolbar shorthand content contract. Compose with `ToolbarRootContract` /
 * framework `ToolbarRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface ToolbarContract {
  /** Trailing action buttons or controls. */
  actions?: unknown;
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ToolbarRecipeSlot>;
  /** Supporting copy below the title. */
  description?: unknown;
  /** Section heading. */
  title?: unknown;
}
