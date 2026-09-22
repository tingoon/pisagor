import type { BadgeRecipeFn, BadgeVariantProps } from "@pisagor/recipes/badge";

/** Badge props. */
export interface BadgeProps extends BadgeVariantProps {
  /**
   * Style recipe override.
   * @defaultValue badgeRecipe
   */
  recipe?: BadgeRecipeFn;
}
