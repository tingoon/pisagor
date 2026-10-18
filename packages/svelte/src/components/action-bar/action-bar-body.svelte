<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./action-bar.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withContext(() => rest, { name: "Body" });
</script>

<div {...part.props}>{@render children?.()}</div>
