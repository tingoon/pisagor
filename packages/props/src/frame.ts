import type { FrameRecipeFn, FrameVariantProps } from "@pisagor/recipes";

/** Frame props. */
export interface FrameProps extends FrameVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue frameRecipe
   */
  recipe?: FrameRecipeFn;
}
