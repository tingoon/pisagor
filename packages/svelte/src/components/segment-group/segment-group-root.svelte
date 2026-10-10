<script lang="ts">
import {
  type SegmentGroupRootProps as ArkRootProps,
  SegmentGroup as SegmentGroupPrimitive,
} from "@ark-ui/svelte/segment-group";
import type { SegmentGroupProps as BaseSegmentGroupProps } from "@pisagor/props";
import { withProvider } from "./segment-group.context";
import SegmentGroupIndicator from "./segment-group-indicator.svelte";

type SegmentGroupVariant = "default" | "underline";

type Props = Omit<ArkRootProps, "onValueChange"> & {
  onValueChange?: (value: string | null) => void;
  variant?: SegmentGroupVariant;
} & BaseSegmentGroupProps;

let {
  orientation = "horizontal",
  variant = "default",
  children,
  onValueChange,
  ...rest
}: Props = $props();

function handleValueChange(
  details: Parameters<NonNullable<ArkRootProps["onValueChange"]>>[0],
) {
  onValueChange?.(details.value);
}

const root = withProvider(
  () => ({
    ...rest,
    "data-variant": variant,
    onValueChange: onValueChange ? handleValueChange : undefined,
    orientation,
  }),
  { name: "Root", slot: "base" },
);
</script>

<SegmentGroupPrimitive.Root {...root.props}>
  <SegmentGroupIndicator />
  {@render children?.()}
</SegmentGroupPrimitive.Root>
