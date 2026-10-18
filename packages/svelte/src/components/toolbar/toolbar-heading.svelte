<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { withContext } from "./toolbar.context";

  let { children, ...rest }: HTMLAttributes<HTMLElement> = $props();
  const part = withContext(() => rest, { name: "Heading" });
</script>

<div {...part.props}>{@render children?.()}</div>
