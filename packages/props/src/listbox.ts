import type {
  ListboxItemRecipeFn,
  ListboxItemVariantProps,
  ListboxRecipeFn,
} from "@pisagor/recipes/listbox";

/** Listbox props. */
export interface ListboxProps {
  /**
   * Style recipe override.
   * @defaultValue listboxRecipe
   */
  recipe?: ListboxRecipeFn;
}

/** ListboxItem props. */
export interface ListboxItemProps extends ListboxItemVariantProps {
  /**
   * Style recipe override.
   * @defaultValue listboxItemRecipe
   */
  recipe?: ListboxItemRecipeFn;
}
