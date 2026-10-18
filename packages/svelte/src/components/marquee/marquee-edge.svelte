<script lang="ts">
  import {
    Marquee as MarqueePrimitive,
    type MarqueeEdgeProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./marquee.context";

  let { ...rest }: MarqueeEdgeProps = $props();
  const part = withContext(() => rest, { name: "Edge" });
</script>

<MarqueePrimitive.Edge {...part.props} />
