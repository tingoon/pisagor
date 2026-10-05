<script lang="ts">
import {
  type SegmentGroupIndicatorProps,
  SegmentGroup as SegmentGroupPrimitive,
} from "@ark-ui/svelte/segment-group";
import { cn } from "@pisagor/utils";
import { useSegmentGroup } from "./segment-group.context";

let { class: className, ...rest }: SegmentGroupIndicatorProps = $props();
const { slots } = useSegmentGroup();
</script>

<SegmentGroupPrimitive.Indicator
  {...rest}
  class={slots.indicator({ class: cn(className) })}
/>
