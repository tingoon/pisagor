import type { DataListItemRecipeFn, DataListRecipeFn } from "@pisagor/recipes";

/** DataList props. */
export interface DataListProps {
  /**
   * Style recipe override.
   * @defaultValue dataListRecipe
   */
  recipe?: DataListRecipeFn;
}

/** DataListItem props. */
export interface DataListItemProps {
  /**
   * Style recipe override.
   * @defaultValue dataListItemRecipe
   */
  recipe?: DataListItemRecipeFn;
}
