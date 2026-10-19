import type {
  ResizableEdgeHandleRecipeFn,
  ResizableEdgeHandleVariantProps,
  ResizableRecipeFn,
} from "@pisagor/recipes";

/**
 * Shared Resizable root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface ResizableRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue resizableRecipe
   */
  recipe?: ResizableRecipeFn;
}

/**
 * Shared ResizableEdgeHandle root contract: visual variants and recipe
 * override. Used by compound roots; excludes host DOM attributes.
 */
export interface ResizableEdgeHandleRootContract extends ResizableEdgeHandleVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue resizableEdgeHandleRecipe
   */
  recipe?: ResizableEdgeHandleRecipeFn;
}
