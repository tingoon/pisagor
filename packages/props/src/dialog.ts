import type {
  DialogRecipeFn,
  DialogRecipeSlot,
  DialogVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Dialog root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface DialogRootContract extends DialogVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue dialogRecipe
   */
  recipe?: DialogRecipeFn;
}

/**
 * Dialog shorthand content contract. Compose with `DialogRootContract` /
 * framework `DialogRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface DialogContract {
  /** Footer action area. */
  actions?: unknown;
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<DialogRecipeSlot>;
  /** Supporting copy in the header. */
  description?: unknown;
  /** Dialog title. */
  title?: unknown;
  /** Trigger content that opens the dialog. */
  trigger?: unknown;
}

/**
 * DialogHeader shorthand content contract. Content fields stay `unknown` so
 * consumers can narrow them.
 */
export interface DialogHeaderContract {
  /** Supporting copy. */
  description?: unknown;
  /** Header title. */
  title?: unknown;
}
