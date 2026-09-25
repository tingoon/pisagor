import type {
  ResizableEdgeHandleRecipeFn,
  ResizableEdgeHandleVariantProps,
  ResizableRecipeFn,
} from "@pisagor/recipes/resizable";

/** Resizable props. */
export interface ResizableProps {
  /**
   * Style recipe override.
   * @defaultValue resizableRecipe
   */
  recipe?: ResizableRecipeFn;
}

/** ResizableEdgeHandle props. */
export interface ResizableEdgeHandleProps
  extends ResizableEdgeHandleVariantProps {
  /**
   * Style recipe override.
   * @defaultValue resizableEdgeHandleRecipe
   */
  recipe?: ResizableEdgeHandleRecipeFn;
}
