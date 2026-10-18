<script lang="ts">
  import {
    Tour as TourPrimitive,
    type TourActionTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: TourActionTriggerProps = $props();
</script>

<TourPrimitive.ActionTrigger {...rest}>
  {@render children?.()}
</TourPrimitive.ActionTrigger>
