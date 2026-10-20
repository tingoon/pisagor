<script lang="ts">
  import {
    ScrollArea as ScrollAreaPrimitive,
    type ScrollAreaContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./scroll-area.context";

  let { children, ...rest }: ScrollAreaContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<ScrollAreaPrimitive.Content {...part.props}>
  {@render children?.()}
</ScrollAreaPrimitive.Content>
