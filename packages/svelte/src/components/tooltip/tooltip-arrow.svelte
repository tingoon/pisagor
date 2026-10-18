<script lang="ts">
  import {
    Tooltip as TooltipPrimitive,
    type TooltipArrowProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tooltip.context";

  let { children, ...rest }: TooltipArrowProps = $props();
  const part = withContext(() => rest, { name: "Arrow" });
</script>

<TooltipPrimitive.Arrow {...part.props}>
  {@render children?.()}
</TooltipPrimitive.Arrow>
