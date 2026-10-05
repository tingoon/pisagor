<script lang="ts">
import {
  Popover as PopoverPrimitive,
  type PopoverRootProps,
} from "@ark-ui/svelte/popover";

let { modal = false, children, ...rest }: PopoverRootProps = $props();
</script>

<PopoverPrimitive.Root {...rest} {modal}>
  {@render children?.()}
</PopoverPrimitive.Root>
