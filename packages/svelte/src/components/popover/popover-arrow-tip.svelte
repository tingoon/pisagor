<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverArrowTipProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./popover.context";

  let { children, ...rest }: PopoverArrowTipProps = $props();
  const part = withContext(() => rest, { name: "ArrowTip" });
</script>

<PopoverPrimitive.ArrowTip {...part.props}>
  {@render children?.()}
</PopoverPrimitive.ArrowTip>
