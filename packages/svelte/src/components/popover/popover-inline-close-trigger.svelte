<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverCloseTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./popover.context";

  let { children, ...rest }: PopoverCloseTriggerProps = $props();
  const part = withContext(() => rest, { name: "CloseTrigger", slot: "close" });
</script>

<PopoverPrimitive.CloseTrigger {...part.props}>
  {@render children?.()}
</PopoverPrimitive.CloseTrigger>
