import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/svelte";
import SegmentGroupIndicator from "./segment-group-indicator.svelte";
import SegmentGroupItem from "./segment-group-item.svelte";
import SegmentGroupItemControl from "./segment-group-item-control.svelte";
import SegmentGroupItemText from "./segment-group-item-text.svelte";
import SegmentGroupRoot from "./segment-group-root.svelte";
import SegmentGroupShorthand from "./segment-group-shorthand.svelte";

export type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemControlProps,
  SegmentGroupItemHiddenInputProps,
  SegmentGroupItemProps,
  SegmentGroupItemTextProps,
} from "@ark-ui/svelte";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  ItemControl: SegmentGroupItemControl,
  ItemHiddenInput: SegmentGroupPrimitive.ItemHiddenInput,
  ItemText: SegmentGroupItemText,
  Root: SegmentGroupRoot,
});
