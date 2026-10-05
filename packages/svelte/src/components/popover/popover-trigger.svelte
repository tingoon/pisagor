<script lang="ts">
import {
  Popover as PopoverPrimitive,
  type PopoverTriggerProps,
} from "@ark-ui/svelte/popover";

let { children, ...rest }: PopoverTriggerProps = $props();
</script>

<PopoverPrimitive.Trigger {...rest}>
  {@render children?.()}
</PopoverPrimitive.Trigger>
