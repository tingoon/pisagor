import type { ProseRecipeFn } from "@pisagor/recipes";

/** Prose props. */
export interface ProseProps {
  /**
   * Style recipe override.
   * @defaultValue proseRecipe
   */
  recipe?: ProseRecipeFn;
}
