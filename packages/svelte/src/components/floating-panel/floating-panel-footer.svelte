<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./floating-panel.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withContext(() => rest, { name: "Footer" });
</script>

<div {...part.props}>{@render children?.()}</div>
