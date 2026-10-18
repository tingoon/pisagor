<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverPositionerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: PopoverPositionerProps = $props();
</script>

<PopoverPrimitive.Positioner {...rest}>
  {@render children?.()}
</PopoverPrimitive.Positioner>
