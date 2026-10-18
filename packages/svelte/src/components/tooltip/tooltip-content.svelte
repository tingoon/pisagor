<script lang="ts">
  import {
    Tooltip as TooltipPrimitive,
    type TooltipContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./tooltip.context";

  let { children, ...rest }: TooltipContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<TooltipPrimitive.Content {...part.props}>
  {@render children?.()}
</TooltipPrimitive.Content>
