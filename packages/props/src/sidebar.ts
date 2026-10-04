import type { SidebarRecipeFn, SidebarVariantProps } from "@pisagor/recipes";

/** Sidebar props. */
export interface SidebarProps extends SidebarVariantProps {
  /**
   * Style recipe override.
   * @defaultValue sidebarRecipe
   */
  recipe?: SidebarRecipeFn;
}
