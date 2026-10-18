<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./navbar.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<div {...part.props}>{@render children?.()}</div>
