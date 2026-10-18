<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./timeline.context";

  let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
  const part = withContext(() => rest, {
    name: "Separator",
    slot: "separator",
  });
</script>

<div {...part.props} aria-hidden="true">{@render children?.()}</div>
