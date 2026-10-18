<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverCloseTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: PopoverCloseTriggerProps = $props();
</script>

<PopoverPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</PopoverPrimitive.CloseTrigger>
