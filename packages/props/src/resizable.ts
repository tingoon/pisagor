import type {
  ResizableEdgeHandleRecipeFn,
  ResizableEdgeHandleVariantProps,
  ResizableRecipeFn,
} from "@pisagor/recipes";

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
