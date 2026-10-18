import type { ItemRecipeFn, ItemVariantProps } from "@pisagor/recipes";

/**
 * Shared Item root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface ItemRootContract extends ItemVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue itemRecipe
   */
  recipe?: ItemRecipeFn;
}
