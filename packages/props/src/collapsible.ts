import type { CollapsibleRecipeFn } from "@pisagor/recipes";

/** Collapsible props. */
export interface CollapsibleProps {
  /**
   * Style recipe override.
   * @defaultValue collapsibleRecipe
   */
  recipe?: CollapsibleRecipeFn;
}
