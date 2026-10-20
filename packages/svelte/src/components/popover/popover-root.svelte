<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverRootProps,
  } from "@ark-ui/svelte";
  import type { PopoverRootContract } from "@pisagor/contracts";
  import { withProvider } from "./popover.context";

  type Props = PopoverRootProps & PopoverRootContract;

  let { children, ...rest }: Props = $props();
  // The root renders no element; `base` styles the content surface.
  const root = withProvider(() => rest, { name: "Root" });
</script>

<PopoverPrimitive.Root {...root.props}>
  {@render children?.()}
</PopoverPrimitive.Root>
