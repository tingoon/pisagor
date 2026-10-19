<script lang="ts">
  import {
    Marquee as MarqueePrimitive,
    type MarqueeContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./marquee.context";

  let { children, ...rest }: MarqueeContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<MarqueePrimitive.Content {...part.props}>
  {@render children?.()}
</MarqueePrimitive.Content>
