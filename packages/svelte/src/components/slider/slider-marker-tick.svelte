<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./slider.context";

let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
const part = withContext(() => rest, {
  name: "MarkerTick",
  slot: "markerTick",
});
</script>

<span {...part.props}>{@render children?.()}</span>
