<script lang="ts">
  import {
    SegmentGroup as SegmentGroupPrimitive,
    type SegmentGroupItemControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./segment-group.context";

  let { children, ...rest }: SegmentGroupItemControlProps = $props();
  const part = withContext(() => rest, { name: "ItemControl" });
</script>

<SegmentGroupPrimitive.ItemControl {...part.props}>
  {@render children?.()}
</SegmentGroupPrimitive.ItemControl>
