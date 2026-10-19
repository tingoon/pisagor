<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./rating.context";

  let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();

  const part = withContext(() => rest, {
    name: "Indicator",
    part: "item-indicator",
  });
</script>

<span {...part.props}>
  {@render children?.()}
</span>
