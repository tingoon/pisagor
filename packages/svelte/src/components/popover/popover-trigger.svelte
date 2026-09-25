<script lang="ts">
import type { PopoverTriggerProps } from "@ark-ui/svelte/popover";
import { Popover as PopoverPrimitive } from "@ark-ui/svelte/popover";

type Props = PopoverTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<PopoverPrimitive.Trigger {...rest}> {@render children?.()} </PopoverPrimitive.Trigger>
