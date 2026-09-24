<script lang="ts">
import type { PopoverRootProps } from "@ark-ui/svelte/popover";
import { Popover as PopoverPrimitive } from "@ark-ui/svelte/popover";

type Props = PopoverRootProps;
let { modal = false, children, ...rest }: Props = $props();
</script>

<PopoverPrimitive.Root {...rest} {modal}> {@render children?.()} </PopoverPrimitive.Root>
