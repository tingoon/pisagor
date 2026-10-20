<script lang="ts">
  import {
    HoverCard as HoverCardPrimitive,
    type HoverCardTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./hover-card.context";

  let { children, ...rest }: HoverCardTriggerProps = $props();
  const part = withContext(() => rest, { name: "Trigger" });
</script>

<HoverCardPrimitive.Trigger {...part.props}>
  {@render children?.()}
</HoverCardPrimitive.Trigger>
