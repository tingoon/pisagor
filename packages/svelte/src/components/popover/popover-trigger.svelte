<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./popover.context";

  let { children, ...rest }: PopoverTriggerProps = $props();
  const part = withContext(() => rest, { name: "Trigger" });
</script>

<PopoverPrimitive.Trigger {...part.props}>
  {@render children?.()}
</PopoverPrimitive.Trigger>
