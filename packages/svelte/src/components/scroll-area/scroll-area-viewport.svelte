<script lang="ts">
  import {
    ScrollArea as ScrollAreaPrimitive,
    type ScrollAreaViewportProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./scroll-area.context";

  let { children, ...rest }: ScrollAreaViewportProps = $props();
  const part = withContext(() => rest, { name: "Viewport" });
</script>

<ScrollAreaPrimitive.Viewport {...part.props}>
  {@render children?.()}
</ScrollAreaPrimitive.Viewport>
