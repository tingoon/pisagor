import type {
  ToastItemRecipeFn,
  ToastItemRecipeSlot,
  ToastRecipeFn,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Toast (toaster) root contract: recipe override. Used by compound
 * roots; excludes host DOM attributes.
 */
export interface ToastRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue toastRecipe
   */
  recipe?: ToastRecipeFn;
}

/**
 * Shared ToastItem root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface ToastItemRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue toastItemRecipe
   */
  recipe?: ToastItemRecipeFn;
}

/**
 * ToastItem shorthand content contract. Compose with `ToastItemRootContract` /
 * framework `ToastItemRootProps` — do not extend the root here so root fields
 * are not applied twice.
 */
export interface ToastItemContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ToastItemRecipeSlot>;
}
