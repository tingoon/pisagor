<script lang="ts">
import {
  type MarqueeItemProps,
  Marquee as MarqueePrimitive,
} from "@ark-ui/svelte/marquee";
import { withContext } from "./marquee.context";

let { children, ...rest }: MarqueeItemProps = $props();
const part = withContext(() => rest, { name: "Item" });
</script>

<MarqueePrimitive.Item {...part.props}>
  {@render children?.()}
</MarqueePrimitive.Item>
