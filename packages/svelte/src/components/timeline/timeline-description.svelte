<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./timeline.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withContext(() => rest, {
    name: "Description",
    slot: "description",
  });
</script>

<div {...part.props}>{@render children?.()}</div>
