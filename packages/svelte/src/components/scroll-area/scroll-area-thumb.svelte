<script lang="ts">
  import {
    ScrollArea as ScrollAreaPrimitive,
    type ScrollAreaThumbProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./scroll-area.context";

  let { ...rest }: ScrollAreaThumbProps = $props();
  const part = withContext(() => rest, { name: "Thumb" });
</script>

<ScrollAreaPrimitive.Thumb {...part.props} />
