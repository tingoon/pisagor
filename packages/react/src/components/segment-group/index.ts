import {
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupRoot,
  SegmentGroupShorthand,
} from "./segment-group";

export type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemProps,
  SegmentGroupItemTextProps,
  SegmentGroupProps,
  SegmentGroupRootProps,
} from "./segment-group";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  Root: SegmentGroupRoot,
});
