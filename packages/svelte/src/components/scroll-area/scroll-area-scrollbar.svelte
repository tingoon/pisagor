<script lang="ts">
  import {
    ScrollArea as ScrollAreaPrimitive,
    type ScrollAreaScrollbarProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./scroll-area.context";

  let { children, ...rest }: ScrollAreaScrollbarProps = $props();
  const part = withContext(() => rest, { name: "Scrollbar" });
</script>

<ScrollAreaPrimitive.Scrollbar {...part.props}>
  {@render children?.()}
</ScrollAreaPrimitive.Scrollbar>
