<script lang="ts">
import {
  type PopoverArrowProps,
  Popover as PopoverPrimitive,
} from "@ark-ui/svelte/popover";
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
