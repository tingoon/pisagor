<script lang="ts">
  import {
    HoverCard as HoverCardPrimitive,
    type HoverCardContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./hover-card.context";

  let { children, ...rest }: HoverCardContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<HoverCardPrimitive.Content {...part.props}>
  {@render children?.()}
</HoverCardPrimitive.Content>
