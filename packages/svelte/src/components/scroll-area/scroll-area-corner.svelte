<script lang="ts">
  import {
    ScrollArea as ScrollAreaPrimitive,
    type ScrollAreaCornerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./scroll-area.context";

  let { children, ...rest }: ScrollAreaCornerProps = $props();
  const part = withContext(() => rest, { name: "Corner" });
</script>

<ScrollAreaPrimitive.Corner {...part.props}>
  {@render children?.()}
</ScrollAreaPrimitive.Corner>
