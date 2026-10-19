import type {
  SortableItemRecipeFn,
  SortableRecipeFn,
  SortableVariantProps,
} from "@pisagor/recipes";

/**
 * Shared Sortable root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface SortableRootContract extends SortableVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue sortableRecipe
   */
  recipe?: SortableRecipeFn;
}

/**
 * Shared SortableItem root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface SortableItemRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue sortableItemRecipe
   */
  recipe?: SortableItemRecipeFn;
}
