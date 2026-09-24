<script lang="ts">
import type { TourActionTriggerProps } from "@ark-ui/svelte/tour";
import { Tour as TourPrimitive } from "@ark-ui/svelte/tour";

let { children, ...rest }: TourActionTriggerProps = $props();
</script>

<TourPrimitive.ActionTrigger {...rest}> {@render children?.()} </TourPrimitive.ActionTrigger>
