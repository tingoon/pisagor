import type { HoverCardRecipeFn } from "@pisagor/recipes/hover-card";

/** HoverCard props. */
export interface HoverCardProps {
  /**
   * Style recipe override.
   * @defaultValue hoverCardRecipe
   */
  recipe?: HoverCardRecipeFn;
}
