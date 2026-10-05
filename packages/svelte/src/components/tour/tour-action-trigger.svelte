<script lang="ts">
import {
  type TourActionTriggerProps,
  Tour as TourPrimitive,
} from "@ark-ui/svelte/tour";

let { children, ...rest }: TourActionTriggerProps = $props();
</script>

<TourPrimitive.ActionTrigger {...rest}>
  {@render children?.()}
</TourPrimitive.ActionTrigger>
