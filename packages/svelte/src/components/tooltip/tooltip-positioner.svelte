<script lang="ts">
  import {
    Tooltip as TooltipPrimitive,
    type TooltipPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tooltip.context";

  let { children, ...rest }: TooltipPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<TooltipPrimitive.Positioner {...part.props}>
  {@render children?.()}
</TooltipPrimitive.Positioner>
