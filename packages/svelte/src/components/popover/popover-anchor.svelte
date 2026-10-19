<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverAnchorProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./popover.context";

  let { children, ...rest }: PopoverAnchorProps = $props();
  const part = withContext(() => rest, { name: "Anchor" });
</script>

<PopoverPrimitive.Anchor {...part.props}>
  {@render children?.()}
</PopoverPrimitive.Anchor>
