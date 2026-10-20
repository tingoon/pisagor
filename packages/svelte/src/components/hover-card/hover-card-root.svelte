<script lang="ts">
  import {
    HoverCard as HoverCardPrimitive,
    type HoverCardRootProps,
  } from "@ark-ui/svelte";
  import type { HoverCardRootContract } from "@pisagor/contracts";
  import { withProvider } from "./hover-card.context";

  type Props = HoverCardRootProps & HoverCardRootContract;

  let { children, ...rest }: Props = $props();
  // The root renders no element; `base` is an empty slot.
  const root = withProvider(() => rest, {
    defaultProps: {
      closeDelay: 300,
      openDelay: 600,
      positioning: { placement: "top" },
    },
    name: "Root",
  });
</script>

<HoverCardPrimitive.Root {...root.props}>
  {@render children?.()}
</HoverCardPrimitive.Root>
