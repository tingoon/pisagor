<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverArrowProps,
  } from "@ark-ui/svelte";
  import { usePopoverContent } from "./popover.context";

  let { style, ...rest }: PopoverArrowProps = $props();
  const styles = usePopoverContent();
</script>

<PopoverPrimitive.Arrow
  {...rest}
  style={`--arrow-background: var(--popover); --arrow-size: calc(1.5 * var(--spacing));${style ? ` ${style}` : ""}`}
>
  <PopoverPrimitive.ArrowTip class={styles.slots.arrowTip()} />
</PopoverPrimitive.Arrow>
