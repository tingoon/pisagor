import type { CommandRecipeFn } from "@pisagor/recipes";

/** Command props. */
export interface CommandProps {
  /**
   * Style recipe override.
   * @defaultValue commandRecipe
   */
  recipe?: CommandRecipeFn;
}
