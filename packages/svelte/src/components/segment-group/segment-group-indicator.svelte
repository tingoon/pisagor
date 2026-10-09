<script lang="ts">
import {
  type SegmentGroupIndicatorProps,
  SegmentGroup as SegmentGroupPrimitive,
} from "@ark-ui/svelte/segment-group";
import { withContext } from "./segment-group.context";

let { ...rest }: SegmentGroupIndicatorProps = $props();
const part = withContext(() => rest, { name: "Indicator" });
</script>

<SegmentGroupPrimitive.Indicator {...part.props} />
