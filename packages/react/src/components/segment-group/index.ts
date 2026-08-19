import {
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupRoot,
  SegmentGroupShorthand,
} from "./segment-group";

export type { SegmentGroupProps } from "./segment-group";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  Root: SegmentGroupRoot,
});
