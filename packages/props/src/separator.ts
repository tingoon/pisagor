import type { SeparatorRecipeFn } from "@pisagor/recipes/separator";

/** Separator props. */
export interface SeparatorProps {
  /**
   * Style recipe override.
   * @defaultValue separatorRecipe
   */
  recipe?: SeparatorRecipeFn;
}
