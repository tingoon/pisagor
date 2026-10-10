<script lang="ts">
import {
  type PopoverPositionerProps,
  Popover as PopoverPrimitive,
} from "@ark-ui/svelte/popover";

let { children, ...rest }: PopoverPositionerProps = $props();
</script>

<PopoverPrimitive.Positioner {...rest}>
  {@render children?.()}
</PopoverPrimitive.Positioner>
