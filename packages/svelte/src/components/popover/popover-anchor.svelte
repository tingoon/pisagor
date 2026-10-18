<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverAnchorProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: PopoverAnchorProps = $props();
</script>

<PopoverPrimitive.Anchor {...rest}>
  {@render children?.()}
</PopoverPrimitive.Anchor>
