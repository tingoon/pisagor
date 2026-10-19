import type { BadgeRecipeFn, BadgeVariantProps } from "@pisagor/recipes";

/**
 * Shared Badge root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface BadgeRootContract extends BadgeVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue badgeRecipe
   */
  recipe?: BadgeRecipeFn;
}
