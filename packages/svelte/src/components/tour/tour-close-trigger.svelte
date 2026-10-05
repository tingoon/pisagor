<script lang="ts">
import {
  type TourCloseTriggerProps,
  Tour as TourPrimitive,
} from "@ark-ui/svelte/tour";

let { children, ...rest }: TourCloseTriggerProps = $props();
</script>

<TourPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</TourPrimitive.CloseTrigger>
