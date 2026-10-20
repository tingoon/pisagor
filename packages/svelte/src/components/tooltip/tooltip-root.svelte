<script lang="ts">
  import {
    Tooltip as TooltipPrimitive,
    type TooltipRootProps,
  } from "@ark-ui/svelte";
  import type { TooltipRootContract } from "@pisagor/contracts";
  import { withProvider } from "./tooltip.context";

  type Props = TooltipRootProps & TooltipRootContract;

  let { children, ...rest }: Props = $props();
  // The root renders no element; `base` is an empty slot.
  const root = withProvider(() => rest, {
    defaultProps: {
      closeDelay: 150,
      openDelay: 400,
      positioning: { placement: "top" },
    },
    name: "Root",
  });
</script>

<TooltipPrimitive.Root {...root.props}>
  {@render children?.()}
</TooltipPrimitive.Root>
