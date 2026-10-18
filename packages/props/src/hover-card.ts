import type { HoverCardRecipeFn } from "@pisagor/recipes";

/**
 * Shared HoverCard root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface HoverCardRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue hoverCardRecipe
   */
  recipe?: HoverCardRecipeFn;
}
