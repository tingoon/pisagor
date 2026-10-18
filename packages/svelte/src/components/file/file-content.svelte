<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./file.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withContext(() => rest, { name: "Content", slot: "content" });
</script>

<div {...part.props}>{@render children?.()}</div>
