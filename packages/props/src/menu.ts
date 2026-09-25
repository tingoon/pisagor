import type {
  MenuItemRecipeFn,
  MenuItemVariantProps,
  MenuRecipeFn,
} from "@pisagor/recipes/menu";

/** Menu props. */
export interface MenuProps {
  /**
   * Style recipe override.
   * @defaultValue menuRecipe
   */
  recipe?: MenuRecipeFn;
}

/** MenuItem props. */
export interface MenuItemProps extends MenuItemVariantProps {
  /**
   * Style recipe override.
   * @defaultValue menuItemRecipe
   */
  recipe?: MenuItemRecipeFn;
}
