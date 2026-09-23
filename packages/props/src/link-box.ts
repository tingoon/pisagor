import type { LinkBoxRecipeFn } from "@pisagor/recipes/link-box";

/** LinkBox props. */
export interface LinkBoxProps {
  /**
   * Style recipe override.
   * @defaultValue linkBoxRecipe
   */
  recipe?: LinkBoxRecipeFn;
}
