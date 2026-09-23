import type { PopoverRecipeFn } from "@pisagor/recipes/popover";

/** Popover props. */
export interface PopoverProps {
  /**
   * Style recipe override.
   * @defaultValue popoverRecipe
   */
  recipe?: PopoverRecipeFn;
}
