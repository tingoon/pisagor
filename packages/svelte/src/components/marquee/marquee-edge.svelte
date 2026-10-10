<script lang="ts">
import {
  type MarqueeEdgeProps,
  Marquee as MarqueePrimitive,
} from "@ark-ui/svelte/marquee";
import { withContext } from "./marquee.context";

let { ...rest }: MarqueeEdgeProps = $props();
const part = withContext(() => rest, { name: "Edge" });
</script>

<MarqueePrimitive.Edge {...part.props} />
