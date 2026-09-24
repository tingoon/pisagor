import SegmentGroupIndicator from "./segment-group-indicator.svelte";
import SegmentGroupItem from "./segment-group-item.svelte";
import SegmentGroupRoot from "./segment-group-root.svelte";
import SegmentGroupShorthand from "./segment-group-shorthand.svelte";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  Root: SegmentGroupRoot,
});
