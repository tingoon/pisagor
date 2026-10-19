<script lang="ts">
  import {
    SegmentGroup as SegmentGroupPrimitive,
    type SegmentGroupRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { SegmentGroupRootContract } from "@pisagor/contracts";

  import { withProvider } from "./segment-group.context";
  import SegmentGroupIndicator from "./segment-group-indicator.svelte";

  type SegmentGroupVariant = "default" | "underline";

  type Props = Omit<ArkRootProps, "onValueChange"> & {
    onValueChange?: (value: string | null) => void;
    variant?: SegmentGroupVariant;
  } & Omit<SegmentGroupRootContract, "items">;

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
