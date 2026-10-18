<script lang="ts">
  import {
    HoverCard as HoverCardPrimitive,
    type HoverCardArrowProps,
  } from "@ark-ui/svelte";
  import { useStyles } from "./hover-card.context";

  let { style, ...rest }: HoverCardArrowProps = $props();
  const styles = useStyles();
</script>

<HoverCardPrimitive.Arrow
  {...rest}
  style="--arrow-background: var(--popover); --arrow-size: calc(1.5 * var(--spacing)); {style ??
    ''}"
>
  <HoverCardPrimitive.ArrowTip class={styles.slots.arrowTip()} />
</HoverCardPrimitive.Arrow>
