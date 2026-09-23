import type {
  DropdownMenuItemRecipeFn,
  DropdownMenuItemVariantProps,
  DropdownMenuRecipeFn,
} from "@pisagor/recipes/dropdown-menu";

/** DropdownMenu props. */
export interface DropdownMenuProps {
  /**
   * Style recipe override.
   * @defaultValue dropdownMenuRecipe
   */
  recipe?: DropdownMenuRecipeFn;
}

/** DropdownMenuItem props. */
export interface DropdownMenuItemProps extends DropdownMenuItemVariantProps {
  /**
   * Style recipe override.
   * @defaultValue dropdownMenuItemRecipe
   */
  recipe?: DropdownMenuItemRecipeFn;
}
