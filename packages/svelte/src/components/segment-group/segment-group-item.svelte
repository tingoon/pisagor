<script lang="ts">
  import {
    SegmentGroup as SegmentGroupPrimitive,
    type SegmentGroupItemProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./segment-group.context";

  let { children, ...rest }: SegmentGroupItemProps = $props();
  const part = withContext(() => rest, { name: "Item" });
</script>

<SegmentGroupPrimitive.Item {...part.props}>
  {@render children?.()}
</SegmentGroupPrimitive.Item>
