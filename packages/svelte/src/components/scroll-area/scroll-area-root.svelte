<script lang="ts">
  import {
    ScrollArea as ScrollAreaPrimitive,
    type ScrollAreaRootProps,
  } from "@ark-ui/svelte";
  import type { ScrollAreaRootContract } from "@pisagor/contracts";
  import { withProvider } from "./scroll-area.context";

  type Props = ScrollAreaRootProps & ScrollAreaRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<ScrollAreaPrimitive.Root {...root.props}>
  {@render children?.()}
</ScrollAreaPrimitive.Root>
