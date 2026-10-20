<script lang="ts">
  import {
    Marquee as MarqueePrimitive,
    type MarqueeViewportProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./marquee.context";

  let { children, ...rest }: MarqueeViewportProps = $props();
  const part = withContext(() => rest, { name: "Viewport" });
</script>

<MarqueePrimitive.Viewport {...part.props}>
  {@render children?.()}
</MarqueePrimitive.Viewport>
