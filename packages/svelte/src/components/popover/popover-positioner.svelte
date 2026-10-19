<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./popover.context";

  let { children, ...rest }: PopoverPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<PopoverPrimitive.Positioner {...part.props}>
  {@render children?.()}
</PopoverPrimitive.Positioner>
