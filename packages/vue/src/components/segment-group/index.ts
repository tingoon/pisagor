import {
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemText,
  SegmentGroupRoot,
  SegmentGroupShorthand,
} from "./segment-group";

export type {
  SegmentGroupItemProps,
  SegmentGroupPresetItem,
  SegmentGroupProps,
  SegmentGroupRootProps,
  SegmentGroupVariant,
} from "./segment-group";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  ItemText: SegmentGroupItemText,
  Root: SegmentGroupRoot,
});
