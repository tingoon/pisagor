import type { ItemRecipeFn, ItemVariantProps } from "@pisagor/recipes/item";

/** Item props. */
export interface ItemProps extends ItemVariantProps {
  /**
   * Style recipe override.
   * @defaultValue itemRecipe
   */
  recipe?: ItemRecipeFn;
}
