<script lang="ts">
  import {
    Marquee as MarqueePrimitive,
    type MarqueeItemProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./marquee.context";

  let { children, ...rest }: MarqueeItemProps = $props();
  const part = withContext(() => rest, { name: "Item" });
</script>

<MarqueePrimitive.Item {...part.props}>
  {@render children?.()}
</MarqueePrimitive.Item>
