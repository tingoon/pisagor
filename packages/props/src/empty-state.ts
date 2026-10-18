import type {
  EmptyStateRecipeFn,
  EmptyStateVariantProps,
} from "@pisagor/recipes";

/** EmptyState props. */
export interface EmptyStateProps extends EmptyStateVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue emptyStateRecipe
   */
  recipe?: EmptyStateRecipeFn;
}
