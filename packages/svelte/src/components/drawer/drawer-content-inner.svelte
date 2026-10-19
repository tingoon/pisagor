<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./drawer.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withContext(() => rest, { name: "ContentInner" });
</script>

<div {...part.props}>{@render children?.()}</div>
