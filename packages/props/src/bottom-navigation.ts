import type {
  BottomNavigationItemRecipeFn,
  BottomNavigationRecipeFn,
} from "@pisagor/recipes/bottom-navigation";

/** BottomNavigation props. */
export interface BottomNavigationProps {
  /**
   * Style recipe override.
   * @defaultValue bottomNavigationRecipe
   */
  recipe?: BottomNavigationRecipeFn;
}

/** BottomNavigationItem props. */
export interface BottomNavigationItemProps {
  /**
   * Style recipe override.
   * @defaultValue bottomNavigationItemRecipe
   */
  recipe?: BottomNavigationItemRecipeFn;
}
