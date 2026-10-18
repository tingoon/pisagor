import type {
  SegmentGroupRecipeFn,
  SegmentGroupVariantProps,
} from "@pisagor/recipes";

/** SegmentGroup props. */
export interface SegmentGroupProps extends SegmentGroupVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue segmentGroupRecipe
   */
  recipe?: SegmentGroupRecipeFn;
}
