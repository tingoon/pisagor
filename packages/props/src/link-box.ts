import type { LinkBoxRecipeFn } from "@pisagor/recipes";

/** LinkBox props. */
export interface LinkBoxProps {
  /**
   * Style recipe override.
   * @defaultValue linkBoxRecipe
   */
  recipe?: LinkBoxRecipeFn;
}
