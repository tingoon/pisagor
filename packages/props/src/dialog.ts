import type {
  DialogRecipeFn,
  DialogVariantProps,
} from "@pisagor/recipes/dialog";

/** Dialog props. */
export interface DialogProps extends DialogVariantProps {
  /**
   * Style recipe override.
   * @defaultValue dialogRecipe
   */
  recipe?: DialogRecipeFn;
}
