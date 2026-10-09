<script lang="ts">
import {
  type PopoverCloseTriggerProps,
  Popover as PopoverPrimitive,
} from "@ark-ui/svelte/popover";

let { children, ...rest }: PopoverCloseTriggerProps = $props();
</script>

<PopoverPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</PopoverPrimitive.CloseTrigger>
