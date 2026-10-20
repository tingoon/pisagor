<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./resizable.context";

  /** Visible grip inside a resize trigger; pass your own icon. */
  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withContext(() => rest, { name: "ResizeTriggerHandle" });
</script>

<div {...part.props}>{@render children?.()}</div>
