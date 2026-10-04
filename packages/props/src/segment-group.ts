import type { SegmentGroupRecipeFn } from "@pisagor/recipes";

/** SegmentGroup props. */
export interface SegmentGroupProps {
  /**
   * Style recipe override.
   * @defaultValue segmentGroupRecipe
   */
  recipe?: SegmentGroupRecipeFn;
}
