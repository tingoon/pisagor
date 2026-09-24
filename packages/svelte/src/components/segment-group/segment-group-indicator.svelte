<script lang="ts">
import type { SegmentGroupIndicatorProps } from "@ark-ui/svelte/segment-group";
import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/svelte/segment-group";
import { cn } from "@pisagor/utils";
import { useSegmentGroup } from "./segment-group.context";

type Props = Omit<SegmentGroupIndicatorProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useSegmentGroup();
</script>

<SegmentGroupPrimitive.Indicator {...rest} class={slots.indicator({ class: cn(className) })} />
