<script lang="ts">
  import {
    SegmentGroup as SegmentGroupPrimitive,
    type SegmentGroupIndicatorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./segment-group.context";

  let { ...rest }: SegmentGroupIndicatorProps = $props();
  const part = withContext(() => rest, { name: "Indicator" });
</script>

<SegmentGroupPrimitive.Indicator {...part.props} />
