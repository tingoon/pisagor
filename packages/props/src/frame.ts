import type { FrameRecipeFn } from "@pisagor/recipes";

/** Frame props. */
export interface FrameProps {
  /**
   * Style recipe override.
   * @defaultValue frameRecipe
   */
  recipe?: FrameRecipeFn;
}
