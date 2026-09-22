import type {
  SortableItemRecipeFn,
  SortableRecipeFn,
  SortableVariantProps,
} from "@pisagor/recipes/sortable";

/** Sortable props. */
export interface SortableProps extends SortableVariantProps {
  /**
   * Style recipe override.
   * @defaultValue sortableRecipe
   */
  recipe?: SortableRecipeFn;
}

/** SortableItem props. */
export interface SortableItemProps {
  /**
   * Style recipe override.
   * @defaultValue sortableItemRecipe
   */
  recipe?: SortableItemRecipeFn;
}
