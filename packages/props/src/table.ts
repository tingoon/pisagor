import type { TableRecipeFn, TableVariantProps } from "@pisagor/recipes";

/** Table props. */
export interface TableProps extends TableVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue tableRecipe
   */
  recipe?: TableRecipeFn;
}
