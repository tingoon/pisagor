<script lang="ts">
  import {
    Tooltip as TooltipPrimitive,
    type TooltipArrowTipProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tooltip.context";

  let { children, ...rest }: TooltipArrowTipProps = $props();
  const part = withContext(() => rest, { name: "ArrowTip" });
</script>

<TooltipPrimitive.ArrowTip {...part.props}>
  {@render children?.()}
</TooltipPrimitive.ArrowTip>
