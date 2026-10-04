import type { EmptyStateRecipeFn } from "@pisagor/recipes";

/** EmptyState props. */
export interface EmptyStateProps {
  /**
   * Style recipe override.
   * @defaultValue emptyStateRecipe
   */
  recipe?: EmptyStateRecipeFn;
}
