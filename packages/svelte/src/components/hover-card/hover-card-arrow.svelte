<script lang="ts">
  import {
    HoverCard as HoverCardPrimitive,
    type HoverCardArrowProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./hover-card.context";
  import HoverCardArrowTip from "./hover-card-arrow-tip.svelte";

  const ARROW_STYLE =
    "--arrow-background: var(--popover); --arrow-size: calc(1.5 * var(--spacing));";

  let { children, style, ...rest }: HoverCardArrowProps = $props();
  const part = withContext(
    () => ({ ...rest, style: style ? `${ARROW_STYLE} ${style}` : ARROW_STYLE }),
    { name: "Arrow" },
  );
</script>

<HoverCardPrimitive.Arrow {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    <HoverCardArrowTip />
  {/if}
</HoverCardPrimitive.Arrow>
