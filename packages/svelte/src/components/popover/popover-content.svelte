<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./popover.context";

  let { children, ...rest }: PopoverContentProps = $props();
  const part = withContext(() => rest, { name: "Content", slot: "base" });
</script>

<PopoverPrimitive.Content {...part.props}>
  {@render children?.()}
</PopoverPrimitive.Content>
