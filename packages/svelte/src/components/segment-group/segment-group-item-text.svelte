<script lang="ts">
  import {
    SegmentGroup as SegmentGroupPrimitive,
    type SegmentGroupItemTextProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./segment-group.context";

  let { children, ...rest }: SegmentGroupItemTextProps = $props();
  const part = withContext(() => rest, { name: "ItemText" });
</script>

<SegmentGroupPrimitive.ItemText {...part.props}>
  {@render children?.()}
</SegmentGroupPrimitive.ItemText>
