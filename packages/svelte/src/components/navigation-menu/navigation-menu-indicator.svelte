<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./navigation-menu.context";

  /** Open-state indicator for a trigger; pass your own icon (e.g. a caret). */
  let { children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
  const part = withContext(() => rest, {
    defaultProps: { "aria-hidden": "true" },
    name: "Indicator",
  });
</script>

<span {...part.props}>{@render children?.()}</span>
