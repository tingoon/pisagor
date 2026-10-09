<script lang="ts">
import type { HTMLAttributes } from "svelte/elements";
import { withContext } from "./circular-progress.context";

let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
const part = withContext(() => rest, {
  defaultProps: { "data-part": "value-wrapper" },
  name: "ValueWrapper",
  slot: "valueWrapper",
});
</script>

<span {...part.props}> {@render children?.()} </span>
