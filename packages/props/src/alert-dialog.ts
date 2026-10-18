import type {
  AlertDialogRecipeFn,
  AlertDialogRecipeSlot,
  AlertDialogVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared AlertDialog root contract: visual variants and recipe override. Used
 * by compound roots; excludes host DOM attributes.
 */
export interface AlertDialogRootContract extends AlertDialogVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue alertDialogRecipe
   */
  recipe?: AlertDialogRecipeFn;
}

/**
 * AlertDialog shorthand content contract. Compose with
 * `AlertDialogRootContract` / framework `AlertDialogRootProps` — do not extend
 * the root here so root fields are not applied twice. Content fields stay
 * `unknown` so consumers can narrow them.
 */
export interface AlertDialogContract {
  /** Footer action area. */
  actions?: unknown;
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<AlertDialogRecipeSlot>;
  /** Supporting copy in the header. */
  description?: unknown;
  /** Dialog title. */
  title?: unknown;
  /** Trigger content that opens the dialog. */
  trigger?: unknown;
}

/**
 * AlertDialogHeader shorthand content contract. Content fields stay `unknown`
 * so consumers can narrow them.
 */
export interface AlertDialogHeaderContract {
  /** Supporting copy. */
  description?: unknown;
  /** Header title. */
  title?: unknown;
}
