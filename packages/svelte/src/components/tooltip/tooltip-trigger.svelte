<script lang="ts">
  import {
    Tooltip as TooltipPrimitive,
    type TooltipTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tooltip.context";

  let { children, ...rest }: TooltipTriggerProps = $props();
  const part = withContext(() => rest, { name: "Trigger" });
</script>

<TooltipPrimitive.Trigger {...part.props}>
  {@render children?.()}
</TooltipPrimitive.Trigger>
