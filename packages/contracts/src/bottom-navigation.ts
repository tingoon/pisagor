import type {
  BottomNavigationItemRecipeFn,
  BottomNavigationRecipeFn,
} from "@pisagor/recipes";

/**
 * Shared BottomNavigation root contract: recipe override. Used by compound
 * roots; excludes host DOM attributes.
 */
export interface BottomNavigationRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue bottomNavigationRecipe
   */
  recipe?: BottomNavigationRecipeFn;
}

/**
 * Shared BottomNavigationItem root contract: recipe override. Used by compound
 * roots; excludes host DOM attributes.
 */
export interface BottomNavigationItemRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue bottomNavigationItemRecipe
   */
  recipe?: BottomNavigationItemRecipeFn;
}
