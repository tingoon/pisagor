import {
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupRoot,
  SegmentGroupShorthand,
} from "./segment-group";

export type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemTextProps,
} from "@ark-ui/react/segment-group";

export type {
  SegmentGroupItemProps,
  SegmentGroupProps,
  SegmentGroupRootProps,
} from "./segment-group";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  Root: SegmentGroupRoot,
});
