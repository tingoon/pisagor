import type { SeparatorRecipeFn } from "@pisagor/recipes";

/** Separator props. */
export interface SeparatorProps {
  /**
   * Style recipe override.
   * @defaultValue separatorRecipe
   */
  recipe?: SeparatorRecipeFn;
}
