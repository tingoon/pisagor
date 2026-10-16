<script lang="ts">
  import {
    type HoverCardArrowProps,
    HoverCard as HoverCardPrimitive,
  } from "@ark-ui/svelte/hover-card";
  import { useHoverCard } from "./hover-card.context";

  let { style, ...rest }: HoverCardArrowProps = $props();
  const styles = useHoverCard();
</script>

<HoverCardPrimitive.Arrow
  {...rest}
  style="--arrow-background: var(--popover); --arrow-size: calc(1.5 * var(--spacing)); {style ??
    ''}"
>
  <HoverCardPrimitive.ArrowTip class={styles.slots.arrowTip()} />
</HoverCardPrimitive.Arrow>
