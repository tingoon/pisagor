import type { NavigationMenuRecipeFn } from "@pisagor/recipes";

/** NavigationMenu props. */
export interface NavigationMenuProps {
  /**
   * Style recipe override.
   * @defaultValue navigationMenuRecipe
   */
  recipe?: NavigationMenuRecipeFn;
}
