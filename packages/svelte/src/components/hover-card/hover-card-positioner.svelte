<script lang="ts">
  import {
    HoverCard as HoverCardPrimitive,
    type HoverCardPositionerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./hover-card.context";

  let { children, ...rest }: HoverCardPositionerProps = $props();
  const part = withContext(() => rest, { name: "Positioner" });
</script>

<HoverCardPrimitive.Positioner {...part.props}>
  {@render children?.()}
</HoverCardPrimitive.Positioner>
