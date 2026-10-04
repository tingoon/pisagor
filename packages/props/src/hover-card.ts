import type { HoverCardRecipeFn } from "@pisagor/recipes";

/** HoverCard props. */
export interface HoverCardProps {
  /**
   * Style recipe override.
   * @defaultValue hoverCardRecipe
   */
  recipe?: HoverCardRecipeFn;
}
