import type { ToastItemRecipeFn, ToastRecipeFn } from "@pisagor/recipes/toast";

/** Toast props. */
export interface ToastProps {
  /**
   * Style recipe override.
   * @defaultValue toastRecipe
   */
  recipe?: ToastRecipeFn;
}

/** ToastItem props. */
export interface ToastItemProps {
  /**
   * Style recipe override.
   * @defaultValue toastItemRecipe
   */
  recipe?: ToastItemRecipeFn;
}
