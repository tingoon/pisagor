<script lang="ts">
import {
  type PopoverAnchorProps,
  Popover as PopoverPrimitive,
} from "@ark-ui/svelte/popover";

let { children, ...rest }: PopoverAnchorProps = $props();
</script>

<PopoverPrimitive.Anchor {...rest}>
  {@render children?.()}
</PopoverPrimitive.Anchor>
