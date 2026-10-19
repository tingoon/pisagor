import type { SidebarRecipeFn, SidebarVariantProps } from "@pisagor/recipes";

/**
 * Shared Sidebar root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface SidebarRootContract extends SidebarVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue sidebarRecipe
   */
  recipe?: SidebarRecipeFn;
}
