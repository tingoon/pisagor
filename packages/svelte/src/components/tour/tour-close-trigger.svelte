<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourCloseTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: TourCloseTriggerProps = $props();
</script>

<TourPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</TourPrimitive.CloseTrigger>
