import type { SegmentGroupRecipeFn } from "@pisagor/recipes/segment-group";

/** SegmentGroup props. */
export interface SegmentGroupProps {
  /**
   * Style recipe override.
   * @defaultValue segmentGroupRecipe
   */
  recipe?: SegmentGroupRecipeFn;
}
