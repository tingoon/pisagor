<script lang="ts">
  import {
    HoverCard as HoverCardPrimitive,
    type HoverCardArrowTipProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./hover-card.context";

  let { children, ...rest }: HoverCardArrowTipProps = $props();
  const part = withContext(() => rest, { name: "ArrowTip" });
</script>

<HoverCardPrimitive.ArrowTip {...part.props}>
  {@render children?.()}
</HoverCardPrimitive.ArrowTip>
