import type { NavigationMenuRecipeFn } from "@pisagor/recipes/navigation-menu";

/** NavigationMenu props. */
export interface NavigationMenuProps {
  /**
   * Style recipe override.
   * @defaultValue navigationMenuRecipe
   */
  recipe?: NavigationMenuRecipeFn;
}
