import type {
  AlertDialogRecipeFn,
  AlertDialogVariantProps,
} from "@pisagor/recipes";

/** Alert dialog props. */
export interface AlertDialogProps extends AlertDialogVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue alertDialogRecipe
   */
  recipe?: AlertDialogRecipeFn;
}
