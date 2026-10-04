import type { PopoverRecipeFn } from "@pisagor/recipes";

/** Popover props. */
export interface PopoverProps {
  /**
   * Style recipe override.
   * @defaultValue popoverRecipe
   */
  recipe?: PopoverRecipeFn;
}
