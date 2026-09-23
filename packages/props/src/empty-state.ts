import type { EmptyStateRecipeFn } from "@pisagor/recipes/empty-state";

/** EmptyState props. */
export interface EmptyStateProps {
  /**
   * Style recipe override.
   * @defaultValue emptyStateRecipe
   */
  recipe?: EmptyStateRecipeFn;
}
